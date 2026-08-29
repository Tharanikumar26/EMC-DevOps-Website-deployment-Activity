/**
 * LUMA E-COMMERCE DEMO INTERACTIVE ENGINE (Multi-Page Supported)
 */

// ==========================================================================
// 1. PRODUCT CATALOG DATASET
// ==========================================================================
const PRODUCTS = [
  {
    id: 1,
    name: "PUMA Horizon ANC Headphones",
    category: "audio",
    retailPrice: 349.00,
    memberPrice: 249.00,
    origPrice: 399.00,
    image: "./images/headphones.png",
    rating: 4.9,
    reviewsCount: 328,
    badge: "HOT",
    tagClass: "tag-hot",
    stockStatus: "In Stock",
    stockCount: 42,
    specs: [
      "Active Hybrid Noise Cancellation (-42dB)",
      "40 Hours Battery Life with Fast Charge",
      "Custom 40mm Titanium Drivers",
      "Bluetooth 5.3 + Multi-point Pairing",
      "2-Year Full Hardware Warranty"
    ],
    bulkPricing: [
      { qty: "1 - 2 Units", price: "$249.00 / ea" },
      { qty: "3 - 9 Units", price: "$229.00 / ea" },
      { qty: "10+ Units", price: "$199.00 / ea (20% OFF)" }
    ]
  },
  {
    id: 2,
    name: "PUMA Titanium Smartwatch Ultra",
    category: "wearables",
    retailPrice: 429.00,
    memberPrice: 349.00,
    origPrice: 499.00,
    image: "./images/watch.png",
    rating: 4.8,
    reviewsCount: 194,
    badge: "VIP",
    tagClass: "tag-sale",
    stockStatus: "Low Stock",
    stockCount: 8,
    specs: [
      "Grade 5 Titanium Body & Sapphire Glass",
      "1.96-inch Always-on OLED Display",
      "Advanced ECG & Oxygen Sensors",
      "100m Water Resistance (10 ATM)",
      "7-Day Battery Life on Single Charge"
    ],
    bulkPricing: [
      { qty: "1 - 2 Units", price: "$349.00 / ea" },
      { qty: "3 - 9 Units", price: "$319.00 / ea" },
      { qty: "10+ Units", price: "$289.00 / ea (17% OFF)" }
    ]
  },
  {
    id: 3,
    name: "PUMA Studio Wireless Earbuds",
    category: "audio",
    retailPrice: 179.00,
    memberPrice: 129.00,
    origPrice: 199.00,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    reviewsCount: 412,
    badge: "SALE",
    tagClass: "tag-sale",
    stockStatus: "In Stock",
    stockCount: 85,
    specs: [
      "Spatial Audio with Dynamic Head Tracking",
      "IPX7 Water & Sweat Proof",
      "32 Hours Total Playtime with Case",
      "Wireless Qi Charging Support",
      "Dual Beamforming Microphones"
    ],
    bulkPricing: [
      { qty: "1 - 2 Units", price: "$129.00 / ea" },
      { qty: "3 - 9 Units", price: "$115.00 / ea" },
      { qty: "10+ Units", price: "$99.00 / ea (23% OFF)" }
    ]
  },
  {
    id: 4,
    name: "PUMA Minimalist Urban Tech Pack",
    category: "fashion",
    retailPrice: 139.00,
    memberPrice: 99.00,
    origPrice: 159.00,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewsCount: 156,
    badge: "NEW",
    tagClass: "tag-new",
    stockStatus: "In Stock",
    stockCount: 30,
    specs: [
      "Water-resistant Ballistic Nylon Outer",
      "Padded Sleeve fits up to 16-inch Laptops",
      "Anti-theft Hidden RFID Passport Pocket",
      "Ergonomic Breathable Back Panel",
      "Integrated External USB Charging Port"
    ],
    bulkPricing: [
      { qty: "1 - 2 Units", price: "$99.00 / ea" },
      { qty: "3 - 9 Units", price: "$89.00 / ea" },
      { qty: "10+ Units", price: "$79.00 / ea (20% OFF)" }
    ]
  },
  {
    id: 5,
    name: "PUMA Lumina Smart Ambient Lamp",
    category: "smarthome",
    retailPrice: 119.00,
    memberPrice: 89.00,
    origPrice: 139.00,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80",
    rating: 4.6,
    reviewsCount: 98,
    badge: "HOT",
    tagClass: "tag-hot",
    stockStatus: "In Stock",
    stockCount: 50,
    specs: [
      "16 Million RGB Colors + Warm White",
      "App Control & Alexa/Google Voice Sync",
      "Music Rhythm Synchronization Mode",
      "Sleek Anodized Aluminum Column",
      "Energy Efficient LED Tech (25k hours)"
    ],
    bulkPricing: [
      { qty: "1 - 2 Units", price: "$89.00 / ea" },
      { qty: "3 - 9 Units", price: "$79.00 / ea" },
      { qty: "10+ Units", price: "$69.00 / ea (22% OFF)" }
    ]
  },
  {
    id: 6,
    name: "PUMA Aero Minimalist Sunglasses",
    category: "fashion",
    retailPrice: 99.00,
    memberPrice: 69.00,
    origPrice: 120.00,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviewsCount: 220,
    badge: "VIP",
    tagClass: "tag-sale",
    stockStatus: "In Stock",
    stockCount: 64,
    specs: [
      "Polarized HD Polycarbonate Lenses",
      "100% UV400 Protection Rating",
      "Ultra-lightweight Titanium Frame (18g)",
      "Scratch & Smudge Resistant Coating",
      "Includes Hard Leather Protective Case"
    ],
    bulkPricing: [
      { qty: "1 - 2 Units", price: "$69.00 / ea" },
      { qty: "3 - 9 Units", price: "$59.00 / ea" },
      { qty: "10+ Units", price: "$49.00 / ea (28% OFF)" }
    ]
  }
];

// Shopping Cart State with LocalStorage Persistence
let CART = loadCartFromStorage();
let APPLIED_PROMO = false;

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("LUMA_CART");
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem("LUMA_CART", JSON.stringify(CART));
  } catch (e) {
    console.error(e);
  }
}

// ==========================================================================
// 2. INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  highlightActiveNav();
  initThemeToggle();
  initMobileMenu();
  renderProductGrid("all");
  renderPricingTable();
  initCartListeners();
  initContactForm();
  initFaqAccordion();
  initServiceModals();
  initSearch();
  initMetricCounters();
  updateCartBadges();
});

// Highlight active page link in header
function highlightActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".main-nav .nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html") || (path === "home.html" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function initMetricCounters() {
  const metricNumbers = document.querySelectorAll(".metric-number[data-target]");
  if (!metricNumbers.length) return;

  const setFinalValues = () => {
    metricNumbers.forEach(metric => {
      metric.textContent = `${metric.dataset.target}${metric.dataset.suffix || ""}`;
    });
  };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    setFinalValues();
    return;
  }

  const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;

    metricNumbers.forEach(metric => {
      const target = Number(metric.dataset.target);
      const suffix = metric.dataset.suffix || "";
      const startTime = performance.now();
      const duration = 1400;

      const updateCounter = currentTime => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const value = target % 1 === 0 ? Math.round(target * easedProgress) : (target * easedProgress).toFixed(1);
        metric.textContent = `${value}${suffix}`;

        if (progress < 1) requestAnimationFrame(updateCounter);
      };

      requestAnimationFrame(updateCounter);
    });

    observer.disconnect();
  }, { threshold: 0.35 });

  const metricGrid = document.querySelector(".about-metrics-grid");
  if (metricGrid) observer.observe(metricGrid);
}

function initMobileMenu() {
  const mobileToggle = document.getElementById("mobile-toggle");
  const mainNav = document.getElementById("main-nav");
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener("click", () => {
      mainNav.classList.toggle("mobile-open");
    });
  }
}

// ==========================================================================
// 3. THEME TOGGLE (Dark / Light)
// ==========================================================================
function initThemeToggle() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem("LUMA_THEME");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
  }

  themeToggleBtn.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme", !isLight);
    localStorage.setItem("LUMA_THEME", isLight ? "light" : "dark");
    showToast(isLight ? "Switched to Light Theme ☀️" : "Switched to Dark Theme 🌙");
  });
}

// ==========================================================================
// 4. PRODUCT RENDERER & PRICING TABLE
// ==========================================================================
function renderProductGrid(filterCategory = "all") {
  const gridContainer = document.getElementById("products-grid");
  if (!gridContainer) return;

  const filteredProducts = filterCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filterCategory);

  gridContainer.innerHTML = filteredProducts.map(product => `
    <div class="product-card">
      <span class="product-badge-tag ${product.tagClass}">${product.badge}</span>
      <div class="product-img-wrap">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <span class="product-cat">${product.category}</span>
      <h3 class="product-title">${product.name}</h3>
      <div class="product-rating">
        ★ ${product.rating} <span>(${product.reviewsCount} reviews)</span>
      </div>
      <div class="product-footer">
        <div class="product-price-box">
          <span class="product-orig-price">$${product.origPrice.toFixed(2)}</span>
          <span class="product-final-price">$${product.memberPrice.toFixed(2)}</span>
        </div>
        <div class="product-btn-group">
          <button type="button" class="btn btn-sm btn-outline view-pricing-btn" data-id="${product.id}">
            Pricing Details
          </button>
          <button type="button" class="btn btn-sm btn-primary add-cart-btn" data-id="${product.id}">
            + Cart
          </button>
        </div>
      </div>
    </div>
  `).join("");

  attachProductEventListeners();

  // Attach category pill listeners if present
  const categoryPills = document.querySelectorAll(".filter-pill");
  categoryPills.forEach(pill => {
    pill.onclick = () => {
      categoryPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const category = pill.getAttribute("data-category");
      renderProductGrid(category);
    };
  });
}

function renderPricingTable() {
  const tableBody = document.getElementById("pricing-table-body");
  if (!tableBody) return;

  tableBody.innerHTML = PRODUCTS.map(product => `
    <tr>
      <td>
        <strong style="color:var(--text-main);">${product.name}</strong>
      </td>
      <td><span class="product-cat">${product.category}</span></td>
      <td><span class="price-strike">$${product.retailPrice.toFixed(2)}</span></td>
      <td><strong style="color:var(--accent-emerald); font-size:1.05rem;">$${product.memberPrice.toFixed(2)}</strong></td>
      <td><span class="${product.stockStatus === 'In Stock' ? 'stock-in' : 'stock-low'}">${product.stockStatus}</span></td>
      <td>
        <button type="button" class="btn btn-sm btn-accent view-pricing-btn" data-id="${product.id}">
          View Pricing Details
        </button>
      </td>
    </tr>
  `).join("");

  attachProductEventListeners();
}

function attachProductEventListeners() {
  // Attach "View Pricing Details" modal triggers
  document.querySelectorAll(".view-pricing-btn").forEach(btn => {
    btn.onclick = () => {
      const productId = parseInt(btn.getAttribute("data-id"));
      openPricingDetailsModal(productId);
    };
  });

  // Attach "Add to Cart" triggers
  document.querySelectorAll(".add-cart-btn").forEach(btn => {
    btn.onclick = () => {
      const productId = parseInt(btn.getAttribute("data-id"));
      addToCart(productId);
    };
  });
}

// ==========================================================================
// 5. PRODUCT PRICING DETAILS MODAL
// ==========================================================================
function openPricingDetailsModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("pricing-modal");
  const modalBody = document.getElementById("pricing-modal-body");
  if (!modal || !modalBody) return;

  const discountVal = (product.retailPrice - product.memberPrice).toFixed(2);
  const discountPct = Math.round(((product.retailPrice - product.memberPrice) / product.retailPrice) * 100);

  modalBody.innerHTML = `
    <div class="pricing-modal-grid">
      <div>
        <img src="${product.image}" alt="${product.name}" class="pricing-modal-img">
        <div style="margin-top:1rem;" class="info-card">
          <strong>Warranty & Return Policy</strong>
          <p style="font-size:0.85rem; color:var(--text-secondary);">Includes 2-Year Hardware Warranty, 30-Day Money-Back Guarantee, and 24h Express Shipping.</p>
        </div>
      </div>

      <div>
        <span class="pricing-modal-category">${product.category}</span>
        <h2 class="pricing-modal-title">${product.name}</h2>
        <div class="product-rating" style="margin-bottom:1rem;">
          ★ ${product.rating} <span>(${product.reviewsCount} customer ratings) • ${product.stockStatus} (${product.stockCount} left)</span>
        </div>

        <!-- Detailed Price Breakdown Card -->
        <div class="price-breakdown-box">
          <div class="breakdown-row">
            <span>Standard Retail Price:</span>
            <span class="price-strike">$${product.retailPrice.toFixed(2)}</span>
          </div>
          <div class="breakdown-row">
            <span>VIP Member Price:</span>
            <strong style="color:var(--accent-emerald); font-size:1.1rem;">$${product.memberPrice.toFixed(2)}</strong>
          </div>
          <div class="breakdown-row total-save">
            <span>Instant Savings:</span>
            <span>-$${discountVal} (${discountPct}% OFF)</span>
          </div>
        </div>

        <!-- Bulk Quantity Pricing Tiers -->
        <h4 style="font-size:0.95rem; margin-top:1.2rem; margin-bottom:0.4rem;">Bulk Order Quantity Pricing</h4>
        <table class="bulk-pricing-table">
          <thead>
            <tr>
              <th>Order Quantity</th>
              <th>Unit Price</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            ${product.bulkPricing.map(tier => `
              <tr>
                <td><strong>${tier.qty}</strong></td>
                <td><span style="color:var(--accent-cyan); font-weight:700;">${tier.price}</span></td>
                <td><span style="color:var(--accent-emerald);">Ready to Ship</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>

        <!-- Tech Specifications -->
        <h4 style="font-size:0.95rem; margin-top:1.2rem; margin-bottom:0.4rem;">Key Specifications & Features</h4>
        <ul style="padding-left:1.2rem; margin-bottom:1.5rem; font-size:0.88rem; color:var(--text-secondary);">
          ${product.specs.map(spec => `<li style="margin-bottom:0.3rem;">${spec}</li>`).join("")}
        </ul>

        <!-- Modal CTA -->
        <div style="display:flex; gap:1rem;">
          <button type="button" class="btn btn-primary full-width" id="modal-add-cart-btn">
            Add to Shopping Cart 🛒
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  const modalAddBtn = document.getElementById("modal-add-cart-btn");
  if (modalAddBtn) {
    modalAddBtn.onclick = () => {
      addToCart(product.id);
      modal.classList.remove("open");
    };
  }

  const closeBtn = document.getElementById("modal-close-btn");
  if (closeBtn) {
    closeBtn.onclick = () => modal.classList.remove("open");
  }

  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.remove("open");
  };
}

// ==========================================================================
// 6. SHOPPING CART ENGINE
// ==========================================================================
function initCartListeners() {
  const cartToggleBtn = document.getElementById("cart-toggle-btn");
  const cartDrawerOverlay = document.getElementById("cart-drawer-overlay");
  const cartCloseBtn = document.getElementById("cart-close-btn");
  const applyPromoBtn = document.getElementById("apply-promo-btn");
  const checkoutBtn = document.getElementById("checkout-btn");

  if (cartToggleBtn) {
    cartToggleBtn.onclick = () => openCartDrawer();
  }

  if (cartCloseBtn && cartDrawerOverlay) {
    cartCloseBtn.onclick = () => closeCartDrawer();
    cartDrawerOverlay.onclick = (e) => {
      if (e.target === cartDrawerOverlay) closeCartDrawer();
    };
  }

  if (applyPromoBtn) {
    applyPromoBtn.onclick = () => {
      const promoInput = document.getElementById("promo-code-input");
      if (!promoInput) return;

      const code = promoInput.value.trim().toUpperCase();
      if (code === "LUMA10") {
        APPLIED_PROMO = true;
        showToast("Promo Code LUMA10 Applied! 10% Discount active 🎉");
        renderCartUI();
      } else {
        showToast("Invalid Promo Code. Use LUMA10 for 10% off!");
      }
    };
  }

  if (checkoutBtn) {
    checkoutBtn.onclick = () => {
      if (CART.length === 0) {
        showToast("Your cart is empty!");
        return;
      }

      closeCartDrawer();
      openCheckoutSuccessModal();
    };
  }
}

function openCartDrawer() {
  const overlay = document.getElementById("cart-drawer-overlay");
  if (overlay) {
    renderCartUI();
    overlay.classList.add("open");
  }
}

function closeCartDrawer() {
  const overlay = document.getElementById("cart-drawer-overlay");
  if (overlay) {
    overlay.classList.remove("open");
  }
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingItem = CART.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    CART.push({ productId: productId, qty: 1 });
  }

  saveCartToStorage();
  updateCartBadges();
  showToast(`Added ${product.name} to your cart! 🛍️`);
}

function removeFromCart(productId) {
  CART = CART.filter(item => item.productId !== productId);
  saveCartToStorage();
  updateCartBadges();
  renderCartUI();
}

function updateCartQty(productId, delta) {
  const item = CART.find(i => i.productId === productId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(productId);
    } else {
      saveCartToStorage();
      updateCartBadges();
      renderCartUI();
    }
  }
}

function updateCartBadges() {
  const totalCount = CART.reduce((sum, item) => sum + item.qty, 0);
  const cartBadge = document.getElementById("cart-badge");
  const cartDrawerCount = document.getElementById("cart-drawer-count");

  if (cartBadge) cartBadge.textContent = totalCount;
  if (cartDrawerCount) cartDrawerCount.textContent = totalCount;
}

function renderCartUI() {
  const itemsContainer = document.getElementById("cart-items-container");
  const subtotalEl = document.getElementById("cart-subtotal");
  const discountRow = document.getElementById("discount-row");
  const discountEl = document.getElementById("cart-discount");
  const totalEl = document.getElementById("cart-total");

  if (!itemsContainer) return;

  if (CART.length === 0) {
    itemsContainer.innerHTML = `
      <div style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
        <div style="font-size:3rem; margin-bottom:1rem;">🛒</div>
        <p>Your shopping cart is empty.</p>
        <button type="button" class="btn btn-sm btn-outline" style="margin-top:1rem;" onclick="closeCartDrawer()">Explore Catalog</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "$0.00";
    if (totalEl) totalEl.textContent = "$0.00";
    if (discountRow) discountRow.style.display = "none";
    return;
  }

  let subtotal = 0;
  itemsContainer.innerHTML = CART.map(item => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) return "";
    const itemTotal = product.memberPrice * item.qty;
    subtotal += itemTotal;

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" class="cart-item-img">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${product.name}</h4>
          <span class="cart-item-price">$${product.memberPrice.toFixed(2)} ea</span>
          <div class="qty-controls">
            <button type="button" class="qty-btn" onclick="updateCartQty(${product.id}, -1)">-</button>
            <span style="font-size:0.85rem; font-weight:700;">${item.qty}</span>
            <button type="button" class="qty-btn" onclick="updateCartQty(${product.id}, 1)">+</button>
          </div>
        </div>
        <div style="text-align:right;">
          <strong style="color:var(--text-main); font-size:0.95rem;">$${itemTotal.toFixed(2)}</strong>
          <br>
          <button type="button" style="color:var(--accent-rose); font-size:0.75rem; margin-top:0.4rem;" onclick="removeFromCart(${product.id})">Remove</button>
        </div>
      </div>
    `;
  }).join("");

  let discount = 0;
  if (APPLIED_PROMO) {
    discount = subtotal * 0.10;
    if (discountRow) discountRow.style.display = "flex";
    if (discountEl) discountEl.textContent = `-$${discount.toFixed(2)}`;
  } else {
    if (discountRow) discountRow.style.display = "none";
  }

  const grandTotal = Math.max(0, subtotal - discount);

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${grandTotal.toFixed(2)}`;
}

function openCheckoutSuccessModal() {
  const modal = document.getElementById("checkout-modal");
  if (!modal) return;

  CART = [];
  APPLIED_PROMO = false;
  saveCartToStorage();
  updateCartBadges();

  modal.classList.add("open");

  const doneBtn = document.getElementById("checkout-done-btn");
  const closeBtn = document.getElementById("checkout-close-btn");

  if (doneBtn) doneBtn.onclick = () => modal.classList.remove("open");
  if (closeBtn) closeBtn.onclick = () => modal.classList.remove("open");
}

// ==========================================================================
// 7. CONTACT FORM & FAQ ACCORDION
// ==========================================================================
function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("contact-status");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const subject = document.getElementById("contact-subject").value;
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !email || !subject || !message) {
      if (status) {
        status.textContent = "Please fill in all fields before sending.";
        status.style.color = "var(--accent-rose)";
      }
      return;
    }

    if (status) {
      status.textContent = "Sending message...";
      status.style.color = "var(--accent-cyan)";
    }

    setTimeout(() => {
      form.reset();
      if (status) {
        status.textContent = `Thank you, ${name}! Your inquiry regarding "${subject}" has been received. Our team will respond to ${email} within 2 hours.`;
        status.style.color = "var(--accent-emerald)";
      }
      showToast("Contact inquiry submitted successfully! ✉️");
    }, 1000);
  });
}

function initFaqAccordion() {
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isActive = item.classList.contains("active");

      document.querySelectorAll(".accordion-item").forEach(i => i.classList.remove("active"));

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// ==========================================================================
// 8. SERVICE MODALS
// ==========================================================================
function initServiceModals() {
  const serviceButtons = document.querySelectorAll(".service-link-btn");
  const modal = document.getElementById("service-modal");
  const modalBody = document.getElementById("service-modal-body");
  const closeBtn = document.getElementById("service-close-btn");

const serviceDetails = {

  shipping: {
    title: "Fast & Reliable Shipping",
    icon: "⚡",
    content: "Enjoy fast and dependable delivery on every order. Orders are carefully processed and shipped using trusted delivery partners, with tracking information provided so you can follow your package from dispatch to arrival."
  },

  warranty: {
    title: "Product Warranty & Support",
    icon: "🛡️",
    content: "Our products are backed by reliable warranty coverage for eligible manufacturing or hardware issues. If you experience a problem with your purchase, our support team will help you with the replacement or service process."
  },

  returns: {
    title: "Easy Returns & Refunds",
    icon: "🔄",
    content: "Changed your mind about your purchase? Our simple return process makes it easy to send eligible products back. Once the returned item is received and inspected, your refund will be processed according to our return policy."
  },

  stylist: {
    title: "Personal Shopping Assistance",
    icon: "👑",
    content: "Need help choosing the right product? Our team can provide personalized recommendations based on your preferences, requirements, budget, or gifting needs."
  },

  security: {
    title: "Secure & Protected Payments",
    icon: "🔒",
    content: "Your security is important to us. Payments are processed through trusted and secure payment providers using industry-standard encryption. Your sensitive payment information is protected throughout the checkout process."
  },

  gift: {
    title: "Gift Packaging & Personal Messages",
    icon: "🎁",
    content: "Make your purchase special with our gift packaging options. Add a personalized message to your order and create a thoughtful experience for friends, family, or colleagues."
  }
};

  serviceButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-service");
      const info = serviceDetails[key];
      if (info && modal && modalBody) {
        modalBody.innerHTML = `
          <div style="text-align:center; padding:1rem;">
            <div style="font-size:3rem; margin-bottom:1rem;">${info.icon}</div>
            <h2 style="font-size:1.4rem; margin-bottom:1rem;">${info.title}</h2>
            <p style="color:var(--text-secondary); line-height:1.6; margin-bottom:1.5rem;">${info.content}</p>
            <button type="button" class="btn btn-primary" onclick="document.getElementById('service-modal').classList.remove('open')">Got it!</button>
          </div>
        `;
        modal.classList.add("open");
      }
    });
  });

  if (closeBtn && modal) {
    closeBtn.onclick = () => modal.classList.remove("open");
  }
}

// ==========================================================================
// 9. SEARCH & TOAST NOTIFICATIONS
// ==========================================================================
function initSearch() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const gridContainer = document.getElementById("products-grid");
    if (!gridContainer) return;

    if (!query) {
      renderProductGrid("all");
      return;
    }

    const matchedProducts = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.specs.some(s => s.toLowerCase().includes(query))
    );

    if (matchedProducts.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align:center; padding:3rem 1rem; color:var(--text-muted);">
          <h3>No products matching "${query}"</h3>
          <p>Try searching for "headphones", "watch", "earbuds", or "sunglasses".</p>
        </div>
      `;
    } else {
      gridContainer.innerHTML = matchedProducts.map(product => `
        <div class="product-card">
          <span class="product-badge-tag ${product.tagClass}">${product.badge}</span>
          <div class="product-img-wrap">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <span class="product-cat">${product.category}</span>
          <h3 class="product-title">${product.name}</h3>
          <div class="product-rating">★ ${product.rating} <span>(${product.reviewsCount})</span></div>
          <div class="product-footer">
            <div class="product-price-box">
              <span class="product-orig-price">$${product.origPrice.toFixed(2)}</span>
              <span class="product-final-price">$${product.memberPrice.toFixed(2)}</span>
            </div>
            <div class="product-btn-group">
              <button type="button" class="btn btn-sm btn-outline view-pricing-btn" data-id="${product.id}">Pricing Details</button>
              <button type="button" class="btn btn-sm btn-primary add-cart-btn" data-id="${product.id}">+ Cart</button>
            </div>
          </div>
        </div>
      `).join("");

      attachProductEventListeners();
    }
  });
}

function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✨</span> <div>${message}</div>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
