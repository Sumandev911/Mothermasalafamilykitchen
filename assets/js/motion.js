/* motion.js — NexGro's reusable premium-feel effects. v4
   Four effects, zero dependencies.

   Why v4: IntersectionObserver is throttled or suppressed in non-painting
   contexts (background tabs, some headless renderers, embedded preview panes)
   and left content-bearing images permanently hidden in v2/v3. So the reveal
   trigger is a throttled scroll/resize check using getBoundingClientRect —
   the pre-IO technique that works wherever a browser actually paints and
   scrolls — with IO kept only as a smooth fast-path. reveal() is idempotent,
   so every path is safe to fire. Content is enhancement-hidden only while JS
   is confirmed running; it never depends on a single fragile trigger.

   Markup contract:
     [data-word-reveal]          heading whose words rise one-by-one on load.
     [data-word-reveal="scroll"] same reveal, triggered when it scrolls in.
     [data-fade]                 fades up 30px when it enters the viewport.
     [data-fade-group="3"]       children fade up with a 0.25s sibling stagger.
     [data-count="15000"]        counts 0 → target when visible (data-decimals,
                                 en-IN grouping).
     [data-reveal]               clip-reveal panel/image (--reveal-r radius). */
(function () {
  'use strict';

  var REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var tracked = [];        // elements waiting to be revealed
  var hasIO = typeof IntersectionObserver === 'function';

  function formatNumber(value, decimals) {
    return value.toLocaleString('en-IN', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }

  function wrapWords(el) {
    var nodes = Array.prototype.slice.call(el.childNodes);
    var units = [];
    el.textContent = '';
    nodes.forEach(function (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent.split(/\s+/).forEach(function (word) {
          if (!word) return;
          var span = document.createElement('span');
          span.className = 'wr';
          span.textContent = word;
          el.appendChild(span);
          el.appendChild(document.createTextNode(' '));
          units.push(span);
        });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Wrap words INSIDE the element (preserves styling like .accent-word)
        // so a multi-word span still wraps normally instead of one wide box.
        var inner = wrapWords(node);
        el.appendChild(node);
        el.appendChild(document.createTextNode(' '));
        if (inner.length) { inner.forEach(function (u) { units.push(u); }); }
        else units.push(node); // e.g. an <img> chip with no text
      }
    });
    return units;
  }

  function revealUnits(units) {
    units.forEach(function (span, i) {
      setTimeout(function () { span.classList.add('wr-in'); }, i * 50);
    });
  }

  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    if (typeof requestAnimationFrame !== 'function') {
      el.textContent = formatNumber(target, decimals);
      return;
    }
    var duration = 1600, start = null;
    function frame(now) {
      if (start === null) start = now;
      var progress = Math.min((now - start) / duration, 1);
      el.textContent = formatNumber(target * (1 - Math.pow(1 - progress, 3)), decimals);
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* Idempotent reveal, dispatched by element type. */
  function reveal(el) {
    if (el._revealed) return;
    el._revealed = true;
    if (el.hasAttribute('data-count')) countUp(el);
    else if (el._wrUnits) revealUnits(el._wrUnits);
    else el.classList.add('in-view');
    if (io && el._io) io.unobserve(el);
  }

  var maxReached = 0; // deepest document position the viewport bottom has ever hit

  function nearViewport(el) {
    var r = el.getBoundingClientRect();
    var h = window.innerHeight || document.documentElement.clientHeight;
    if (r.width === 0 && r.height === 0) return false; // not laid out / display:none
    // Reveal anything the user has EVER reached (element top above the deepest
    // scroll watermark, minus a 10% entry threshold). Checks can be starved by
    // scroll jank; the watermark is updated on every scroll event, so a single
    // late check still reveals everything that was passed on the way.
    var absTop = r.top + (window.pageYOffset || document.documentElement.scrollTop || 0);
    return absTop < maxReached - h * 0.1;
  }

  /* Primary trigger: reveal everything currently in/near the viewport. */
  function check() {
    for (var i = tracked.length - 1; i >= 0; i--) {
      var el = tracked[i];
      if (el._revealed) { tracked.splice(i, 1); continue; }
      if (nearViewport(el)) { reveal(el); tracked.splice(i, 1); }
    }
  }

  var scheduled = false, trailing = null;
  function bumpWatermark() {
    var h = window.innerHeight || document.documentElement.clientHeight;
    var y = window.pageYOffset || document.documentElement.scrollTop || 0;
    if (y + h > maxReached) maxReached = y + h;
  }
  function onScroll() {
    bumpWatermark(); // cheap: no layout reads beyond scrollY
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () { scheduled = false; check(); }, 100);
    }
    // Trailing check at the resting position (throttle can coalesce final events).
    clearTimeout(trailing);
    trailing = setTimeout(check, 260);
  }

  /* Fast-path: IO for smooth timing in painting browsers. Never the only path. */
  var io = null;
  if (hasIO) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) reveal(entry.target); });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  }

  function track(el) {
    tracked.push(el);
    if (io) { el._io = true; io.observe(el); }
  }

  function init() {
    document.querySelectorAll('[data-word-reveal]').forEach(function (el) {
      el._wrUnits = wrapWords(el);
      if (el.getAttribute('data-word-reveal') === 'scroll') track(el);
      else if (REDUCE) el._wrUnits.forEach(function (s) { s.classList.add('wr-in'); });
      else revealUnits(el._wrUnits);
    });

    document.querySelectorAll('[data-fade-group]').forEach(function (group) {
      var cycle = parseInt(group.getAttribute('data-fade-group'), 10) || 3;
      Array.prototype.forEach.call(group.children, function (child, i) {
        child.setAttribute('data-fade', '');
        child.style.setProperty('--stagger', ((i % cycle) * 0.25) + 's');
      });
    });

    if (REDUCE) {
      document.querySelectorAll('[data-count]').forEach(function (el) {
        el.textContent = formatNumber(
          parseFloat(el.getAttribute('data-count')),
          parseInt(el.getAttribute('data-decimals') || '0', 10)
        );
      });
      return;
    }

    document.querySelectorAll('[data-fade], [data-reveal], [data-count]').forEach(track);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial sweeps: reveal above-the-fold now, and again once fonts/layout
    // settle. setTimeout fires even where IO and rAF are throttled.
    bumpWatermark();
    setTimeout(function () { bumpWatermark(); check(); }, 60);
    setTimeout(function () { bumpWatermark(); check(); }, 400);
    setTimeout(function () { bumpWatermark(); check(); }, 1200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
