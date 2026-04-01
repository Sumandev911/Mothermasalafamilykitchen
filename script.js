// ===================================
// Mother Masala — Tailwind Config & Interactions
// ===================================

// Tailwind configuration (shared across all pages)
console.log("Script loaded");
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container-lowest": "#0e0e0e",
        "primary-container": "#d4af37",
        "on-primary": "#3c2f00",
        "inverse-on-surface": "#313030",
        "surface-dim": "#131313",
        "on-surface": "#e5e2e1",
        "inverse-primary": "#735c00",
        "on-tertiary": "#442b01",
        "surface-container-high": "#2a2a2a",
        "error-container": "#93000a",
        "on-primary-fixed": "#241a00",
        "surface-container": "#201f1f",
        "tertiary-fixed-dim": "#e9c087",
        "surface-tint": "#e9c349",
        "on-tertiary-fixed-variant": "#5d4114",
        "surface-bright": "#393939",
        "surface": "#131313",
        "on-background": "#e5e2e1",
        "on-tertiary-container": "#5b4012",
        "inverse-surface": "#e5e2e1",
        "secondary-container": "#4e453f",
        "on-secondary": "#362f2a",
        "on-primary-container": "#554300",
        "background": "#131313",
        "outline-variant": "#4d4635",
        "on-error-container": "#ffdad6",
        "on-secondary-container": "#bfb3ab",
        "tertiary-container": "#d4ac75",
        "on-error": "#690005",
        "on-tertiary-fixed": "#291800",
        "on-surface-variant": "#d0c5af",
        "primary-fixed": "#ffe088",
        "primary-fixed-dim": "#e9c349",
        "secondary-fixed-dim": "#d1c4bc",
        "surface-container-low": "#1c1b1b",
        "tertiary": "#f1c78e",
        "secondary": "#d1c4bc",
        "outline": "#99907c",
        "surface-container-highest": "#353534",
        "on-secondary-fixed-variant": "#4e453f",
        "on-primary-fixed-variant": "#574500",
        "error": "#ffb4ab",
        "primary": "#f2ca50",
        "secondary-fixed": "#ede0d8",
        "on-secondary-fixed": "#211a16",
        "tertiary-fixed": "#ffddb1",
        "surface-variant": "#353534"
      },
      fontFamily: {
        headline: ["Noto Serif"],
        body: ["Plus Jakarta Sans"],
        label: ["Plus Jakarta Sans"]
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
    },
  },
};

// ===================================
// DOM Ready
// ===================================
document.addEventListener("DOMContentLoaded", function () {

  // --- Mobile Nav Toggle ---
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const closeBtn = document.getElementById("mobile-nav-close");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => mobileNav.classList.add("open"));
  }
  if (closeBtn && mobileNav) {
    closeBtn.addEventListener("click", () => mobileNav.classList.remove("open"));
  }

  // --- Veg / Non-Veg Tab Toggle (Menu page only) ---
  const vegTab = document.getElementById("tab-veg");
  const nonvegTab = document.getElementById("tab-nonveg");
  const vegSection = document.getElementById("section-veg");
  const nonvegSection = document.getElementById("section-nonveg");

  function showVeg() {
    if (!vegTab) return;
    vegTab.className = "menu-tab active-veg";
    nonvegTab.className = "menu-tab inactive";
    vegSection.classList.add("active");
    vegSection.classList.remove("menu-section");
    nonvegSection.classList.remove("active");
    nonvegSection.classList.add("menu-section");
  }

  function showNonVeg() {
    if (!nonvegTab) return;
    nonvegTab.className = "menu-tab active-nonveg";
    vegTab.className = "menu-tab inactive";
    nonvegSection.classList.add("active");
    nonvegSection.classList.remove("menu-section");
    vegSection.classList.remove("active");
    vegSection.classList.add("menu-section");
  }

  if (vegTab) vegTab.addEventListener("click", showVeg);
  if (nonvegTab) nonvegTab.addEventListener("click", showNonVeg);

  // Default: show Veg
  if (vegTab) showVeg();

  // ===================================
  // Dynamic Menu Renderer
  // ===================================
  try {
    setTimeout(() => {
      if (typeof menuData !== "undefined" && vegSection && nonvegSection) {
        console.log("menuData:", menuData);
        renderMenu(menuData.menu);
      } else {
        console.error("menuData still not loaded");
        if (vegSection) vegSection.innerHTML = "Menu failed to load. Please refresh.";
        if (nonvegSection) nonvegSection.innerHTML = "";
      }
    }, 100);
  } catch (error) {
    console.error("Error during menu rendering logic execution:", error);
  }


  function formatPrice(item) {
    if (item.price_on_request) {
      return '<span class="text-primary font-bold text-sm whitespace-nowrap text-right">Price on Request</span>';
    }
    if (item.half !== undefined && item.full !== undefined) {
      return `<span class="text-primary-container font-label text-sm whitespace-nowrap text-right">₹${item.half} <span class="text-[10px] text-outline">Half</span> | ₹${item.full} <span class="text-[10px] text-outline">Full</span></span>`;
    }
    if (item.price !== undefined) {
      return `<span class="text-primary-container font-label text-sm whitespace-nowrap text-right">₹${item.price}</span>`;
    }
    return "";
  }

  function renderCategoryHTML(cat, index) {
    const type = cat.type;
    const isVeg = type === "veg";
    const tagColor = isVeg
      ? 'bg-green-900/30 text-green-400'
      : type === "nonveg"
        ? 'bg-red-900/30 text-red-400'
        : 'bg-yellow-900/30 text-yellow-400';
    const tagLabel = isVeg ? "Veg" : type === "nonveg" ? "Non-Veg" : "All";

    // Alternate styling for visual variety
    const useCard = index % 3 === 1;
    const wrapClass = useCard
      ? "mb-16 fade-in bg-surface-container-low p-6 md:p-8 rounded-xl border-l-4 border-primary-container"
      : "mb-16 fade-in";

    let itemsHTML = "";
    cat.items.forEach((item) => {
      itemsHTML += `
        <div class="group border-b border-outline-variant/15 pb-5">
          <div class="flex flex-wrap justify-between items-start gap-x-4 gap-y-1 mb-1">
            <h3 class="text-base md:text-lg font-headline group-hover:text-primary transition-colors flex-1 min-w-[150px]">${item.name}</h3>
            ${formatPrice(item)}
          </div>
        </div>`;
    });

    return `
      <section class="${wrapClass}">
        <div class="flex items-center gap-4 mb-8">
          <h2 class="text-2xl md:text-3xl font-headline text-on-surface">${cat.category}</h2>
          <div class="h-[1px] flex-grow bg-outline-variant/30"></div>
          <span class="text-[10px] ${tagColor} px-3 py-1 rounded-full uppercase tracking-widest shrink-0">${tagLabel}</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          ${itemsHTML}
        </div>
        <p class="text-right text-[11px] text-outline mt-4 italic">${cat.items.length} items</p>
      </section>`;
  }

  function renderMenu(categories) {
    let vegHTML = "";
    let nonvegHTML = "";

    categories.forEach((cat, i) => {
      const type = cat.type;
      const html = renderCategoryHTML(cat, i);

      if (type === "veg") {
        vegHTML += html;
      } else if (type === "nonveg") {
        nonvegHTML += html;
      } else {
        // "both" — show in both tabs (fallback if added)
        vegHTML += html;
        nonvegHTML += html;
      }
    });

    // APS note
    const apsNote = `
      <div class="mt-8 p-4 bg-primary-container/10 border border-primary-container/20 rounded-lg text-center max-w-md mx-auto">
        <p class="text-[10px] text-primary-container uppercase tracking-widest mb-1">Market Price Note</p>
        <p class="text-[12px] text-on-surface-variant italic">"Price on Request" items are priced based on daily market sourcing.</p>
      </div>`;

    vegSection.innerHTML = vegHTML + apsNote;
    nonvegSection.innerHTML = nonvegHTML + apsNote;

    // Re-observe new fade-in elements
    const newFaders = document.querySelectorAll(".fade-in:not(.visible)");
    if (newFaders.length) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.12 });
      newFaders.forEach((el) => obs.observe(el));
    }
  }

  // --- Fade-in on scroll ---
  const faders = document.querySelectorAll(".fade-in");
  if (faders.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    faders.forEach((el) => observer.observe(el));
  }

  // ===================================
  // Menu Search
  // ===================================
  const searchInput = document.getElementById("menu-search");
  const searchResults = document.getElementById("search-results");
  const searchCount = document.getElementById("search-count");
  const searchClear = document.getElementById("search-clear");
  const menuMain = document.querySelector("main");
  const toggleSection = document.querySelector(".max-w-7xl.mx-auto.px-6.md\\:px-8.mt-12.mb-10");

  if (searchInput && searchResults && typeof menuData !== "undefined") {
    let debounceTimer;

    searchInput.addEventListener("input", () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => performSearch(searchInput.value.trim()), 150);
    });

    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      clearSearch();
      searchInput.focus();
    });

    function performSearch(query) {
      if (query.length < 2) {
        clearSearch();
        return;
      }

      const q = query.toLowerCase();
      const matches = [];

      menuData.menu.forEach((cat) => {
        cat.items.forEach((item) => {
          if (item.name.toLowerCase().includes(q)) {
            matches.push({ ...item, category: cat.category });
          }
        });
      });

      // Show search UI
      searchResults.classList.remove("hidden");
      searchCount.classList.remove("hidden");
      searchClear.classList.remove("hidden");
      if (menuMain) menuMain.classList.add("hidden");
      if (toggleSection) toggleSection.classList.add("hidden");

      searchCount.textContent = matches.length + " found";

      if (matches.length === 0) {
        searchResults.innerHTML = `
          <div class="py-16 px-8 text-center">
            <span class="material-symbols-outlined text-5xl text-outline/30 mb-4 block">search_off</span>
            <p class="text-lg font-headline text-on-surface mb-2">No dishes found for "${escapeHtml(query)}"</p>
            <p class="text-sm text-outline">Try searching for Paneer, Biryani, Chicken, Naan...</p>
          </div>`;
        return;
      }

      // Group results by category
      const grouped = {};
      matches.forEach((m) => {
        if (!grouped[m.category]) grouped[m.category] = [];
        grouped[m.category].push(m);
      });

      let html = '<div class="p-2">';
      for (const [cat, items] of Object.entries(grouped)) {
        html += `<div class="mb-2">
          <div class="flex items-center gap-3 px-4 pt-4 pb-2">
            <h3 class="text-[10px] text-primary-container uppercase tracking-[0.2em] font-label font-bold whitespace-nowrap">${cat}</h3>
            <div class="h-[1px] flex-grow bg-outline-variant/15"></div>
            <span class="text-[10px] text-outline">${items.length}</span>
          </div>`;
        items.forEach((item) => {
          const name = highlightMatch(item.name, query);
          html += `<div class="flex flex-wrap justify-between items-center px-4 py-3 rounded-lg mx-2 hover:bg-surface-container transition-colors cursor-default gap-x-4 gap-y-1">
            <span class="font-headline text-on-surface text-[15px] flex-1 min-w-[150px]">${name}</span>
            <div class="text-right shrink-0">${formatSearchPrice(item)}</div>
          </div>`;
        });
        html += `</div>`;
      }
      html += '</div>';

      searchResults.innerHTML = html;
    }

    function clearSearch() {
      searchResults.classList.add("hidden");
      searchResults.innerHTML = "";
      searchCount.classList.add("hidden");
      searchClear.classList.add("hidden");
      if (menuMain) menuMain.classList.remove("hidden");
      if (toggleSection) toggleSection.classList.remove("hidden");
    }

    function highlightMatch(text, query) {
      const regex = new RegExp(`(${escapeRegex(query)})`, "gi");
      return text.replace(regex, '<span class="search-highlight">$1</span>');
    }

    function escapeRegex(str) {
      return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function escapeHtml(str) {
      const d = document.createElement("div");
      d.textContent = str;
      return d.innerHTML;
    }

    function formatSearchPrice(item) {
      if (item.price_on_request) {
        return '<span class="text-primary text-sm font-bold">Price on Request</span>';
      }
      if (item.half !== undefined && item.full !== undefined) {
        return `<span class="text-primary-container text-sm">₹${item.half} <span class="text-outline text-[10px]">Half</span> | ₹${item.full} <span class="text-outline text-[10px]">Full</span></span>`;
      }
      if (item.price !== undefined) {
        return `<span class="text-primary-container text-sm">₹${item.price}</span>`;
      }
      return "";
    }
  }

});
