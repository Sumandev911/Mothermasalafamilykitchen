/* menu.js — renders Mother Masala's full menu from menu-data.js.
   Category jump-nav + Veg/Non-Veg filter. Real HTML text (SEO-critical).
   No dependencies; expects global `menuData` from menu-data.js. */
(function () {
  'use strict';
  if (typeof menuData === 'undefined' || !menuData.menu) return;

  var root = document.getElementById('menu-root');
  var catNav = document.getElementById('cat-nav');
  if (!root) return;

  function slug(s) {
    return s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  // en-IN price rendering
  function priceHTML(it) {
    if (it.price_on_request) return '<span class="por">On request</span>';
    if (it.half != null && it.full != null) return '₹' + it.half + ' <span style="opacity:.5">/</span> ₹' + it.full;
    if (it.price != null) return '₹' + it.price;
    return '';
  }

  var navHTML = '';
  var catHTML = '';

  menuData.menu.forEach(function (cat) {
    var id = slug(cat.category);
    var isVeg = cat.type === 'veg';
    navHTML += '<a href="#' + id + '" data-type="' + cat.type + '">' + cat.category + '</a>';

    var items = cat.items.map(function (it) {
      return '<li class="menu-item">' +
        '<span class="mi-mark ' + cat.type + '" aria-label="' + (isVeg ? 'Veg' : 'Non-veg') + '"></span>' +
        '<span class="mi-name">' + it.name + '</span>' +
        '<span class="mi-price">' + priceHTML(it) + '</span>' +
      '</li>';
    }).join('');

    catHTML += '<section class="menu-cat" id="' + id + '" data-type="' + cat.type + '" data-fade>' +
      '<div class="menu-cat-head">' +
        '<h2>' + cat.category + '</h2>' +
        '<span class="cat-badge ' + cat.type + '">' + (isVeg ? 'Veg' : 'Non-Veg') + '</span>' +
      '</div>' +
      '<ul class="menu-items">' + items + '</ul>' +
    '</section>';
  });

  catNav.innerHTML = navHTML;
  root.innerHTML = catHTML;

  // Veg / Non-Veg filter
  var buttons = document.querySelectorAll('.veg-toggle button');
  function applyFilter(f) {
    document.querySelectorAll('.menu-cat').forEach(function (c) {
      c.style.display = (f === 'all' || c.getAttribute('data-type') === f) ? '' : 'none';
    });
    catNav.querySelectorAll('a').forEach(function (a) {
      a.style.display = (f === 'all' || a.getAttribute('data-type') === f) ? '' : 'none';
    });
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-filter') === f ? 'true' : 'false'); });
  }
  buttons.forEach(function (b) {
    b.addEventListener('click', function () { applyFilter(b.getAttribute('data-filter')); });
  });

  // active category highlight on scroll
  var links = Array.prototype.slice.call(catNav.querySelectorAll('a'));
  var cats = Array.prototype.slice.call(document.querySelectorAll('.menu-cat'));
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var id = e.target.id;
        links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + id); });
        var active = catNav.querySelector('a.active');
        if (active) active.scrollIntoView({ block: 'nearest', inline: 'center' });
      });
    }, { rootMargin: '-150px 0px -70% 0px' });
    cats.forEach(function (c) { spy.observe(c); });
  }
})();
