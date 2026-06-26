// ==========================================================================
// SB ENTERPRISES B2B SCROLLYTELLING EXPERIENCE - ANIMATION & B2B LOGIC
// ==========================================================================

// Register GSAP & ScrollTrigger plugins
gsap.registerPlugin(ScrollTrigger);

// 1. Categorized Product Offerings Database
const products = [
    // Pneumatic & Tube Components
    {
        sku: 'PN-BCF-12',
        name: 'Brass Compression Fitting (Straight)',
        category: 'pneumatic',
        image: 'assets/brass_fitting.png',
        price: 14.50,
        stock: 120,
        status: 'in-stock',
        specs: {
            'Material': 'Brass CZ121',
            'Pressure Rating': '250 Bar',
            'Thread Size': '1/2" NPT Male'
        },
        cadFile: 'PN-BCF-12.step'
    },
    {
        sku: 'PN-OTF-08',
        name: 'One-Touch Push-in Fitting',
        category: 'pneumatic',
        image: 'assets/pneumatic_fittings.png',
        price: 3.80,
        stock: 350,
        status: 'in-stock',
        specs: {
            'Material': 'Nickel-Plated Brass',
            'Tube OD': '8 mm',
            'Max Pressure': '15 Bar'
        },
        cadFile: 'PN-OTF-08.step'
    },
    {
        sku: 'PN-PUT-06',
        name: 'PU Pneumatic Tubing (100m Roll)',
        category: 'pneumatic',
        image: 'assets/pneumatic_fittings.png',
        price: 45.00,
        stock: 45,
        status: 'in-stock',
        specs: {
            'Material': 'Polyurethane (PU)',
            'Dimensions': '6mm OD x 4mm ID',
            'Temp Range': '-20°C to +60°C'
        },
        cadFile: 'PN-PUT-06.step'
    },
    // Hydraulics & Valves
    {
        sku: 'HY-HVF-24',
        name: 'Hydraulic High-Pressure Needle Valve',
        category: 'hydraulic',
        image: 'assets/hydraulic_valves.png',
        price: 125.00,
        stock: 18,
        status: 'in-stock',
        specs: {
            'Material': 'Carbon Steel ASTM A105',
            'Pressure Rating': '400 Bar',
            'Connection': '1/2" BSP Female'
        },
        cadFile: 'HY-HVF-24.step'
    },
    {
        sku: 'HY-IVF-12',
        name: 'Instrumentation Double Block & Bleed Valve',
        category: 'hydraulic',
        image: 'assets/hydraulic_valves.png',
        price: 295.00,
        stock: 5,
        status: 'custom-order',
        specs: {
            'Material': '316 Stainless Steel',
            'Pressure Rating': '6000 PSI',
            'Inlet Connection': '1/2" Flanged'
        },
        cadFile: 'HY-IVF-12.step'
    },
    // Industrial Seals & Packings
    {
        sku: 'SL-SOS-35',
        name: 'Sunny Oil Seal (Double-Lip)',
        category: 'seals',
        image: 'assets/industrial_seals.png',
        price: 8.50,
        stock: 280,
        status: 'in-stock',
        specs: {
            'Material': 'NBR / Carbon Steel Garter',
            'Dimensions': '35 x 52 x 8 mm',
            'Max Speed': '14 m/s'
        },
        cadFile: 'SL-SOS-35.step'
    },
    {
        sku: 'SL-ORG-80',
        name: 'Viton FKM Industrial O-Rings (Pack of 50)',
        category: 'seals',
        image: 'assets/industrial_seals.png',
        price: 9.20,
        stock: 500,
        status: 'in-stock',
        specs: {
            'Material': 'Viton (FKM) 75 Shore A',
            'ID / Cross Section': '22.00 mm / 3.00 mm',
            'Temp Range': '-40°C to +220°C'
        },
        cadFile: 'SL-ORG-80.step'
    },
    {
        sku: 'SL-USE-45',
        name: 'Hydraulic Cylinder U-Seal',
        category: 'seals',
        image: 'assets/industrial_seals.png',
        price: 12.00,
        stock: 140,
        status: 'in-stock',
        specs: {
            'Material': 'Polyurethane (PU)',
            'Dimensions': '45 x 55 x 10 mm',
            'Pressure Range': '0 - 400 Bar'
        },
        cadFile: 'SL-USE-45.step'
    },
    {
        sku: 'SL-CVP-60',
        name: 'Chevron V-Packing Set',
        category: 'seals',
        image: 'assets/industrial_seals.png',
        price: 35.00,
        stock: 22,
        status: 'in-stock',
        specs: {
            'Material': 'Fabric Reinforced NBR',
            'Dimensions': '60 x 75 x 22 mm',
            'Set Assembly': '3 V-Rings + Header + Support'
        },
        cadFile: 'SL-CVP-60.step'
    },
    // Hardware, Materials & Infrastructure
    {
        sku: 'HW-GIF-15',
        name: 'Galvanized Iron (G.I.) Threaded Elbow 90°',
        category: 'hardware',
        image: 'assets/hero_bg.png',
        price: 5.20,
        stock: 150,
        status: 'in-stock',
        specs: {
            'Material': 'Malleable Iron BS EN 10242',
            'Zinc Coating': 'Hot-dip Galvanized',
            'Size': '1.5" BSP'
        },
        cadFile: 'HW-GIF-15.step'
    },
    {
        sku: 'HW-MSF-02',
        name: 'Mild Steel (M.S.) Butt-Weld Equal Tee',
        category: 'hardware',
        image: 'assets/hero_bg.png',
        price: 19.80,
        stock: 80,
        status: 'in-stock',
        specs: {
            'Material': 'Mild Steel ASTM A234 WPB',
            'Wall Thickness': 'Schedule 40',
            'Nominal Bore': '2" (DN50)'
        },
        cadFile: 'HW-MSF-02.step'
    },
    // Industrial Tools & Rubber Goods
    {
        sku: 'TL-HDT-18',
        name: 'Industrial Heavy-Duty Pipe Wrench',
        category: 'tools',
        image: 'assets/hero_bg.png',
        price: 28.90,
        stock: 30,
        status: 'in-stock',
        specs: {
            'Material': 'Drop-Forged Alloy Steel',
            'Length': '18 Inches',
            'Jaw Capacity': '2.5 Inches'
        },
        cadFile: 'TL-HDT-18.step'
    },
    {
        sku: 'TL-RBD-10',
        name: 'EPDM Sponge Rubber Beading Strip (50m)',
        category: 'tools',
        image: 'assets/industrial_seals.png',
        price: 32.00,
        stock: 60,
        status: 'in-stock',
        specs: {
            'Material': 'EPDM Sponge Rubber',
            'Profile': 'D-Shape 12 x 10 mm',
            'Hardness': '65 Shore A'
        },
        cadFile: 'TL-RBD-10.step'
    }
];

// Application States
const state = {
    rfqCart: [], // Array of { sku, qty, customNotes }
    currentFilter: 'all',
    searchQuery: '',
    loggedInPhone: null,
    orders: [],
    tempOrder: null // Cache details during payment checkout before committing
};

const CLIENT_BASE_DISCOUNT_PCT = 0.15; // 15% Gold status standard B2B discount for SB Enterprises partners

// ==========================================================================
// INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initGSAPAnimations();
    initHeaderScrollSpy();
    initB2BPortalLogic();
    initProductCatalog();
    initClientPortal();
    
    // Add page load visual reveal
    gsap.to('body', { opacity: 1, duration: 0.5 });
});

// ==========================================================================
// CUSTOM TARGET CURSOR
// ==========================================================================

function initCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    window.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: "power2.out"
        });
    });

    // Add hover states for interactive elements
    refreshCursorHovers();
}

function refreshCursorHovers() {
    const hoverElements = 'a, button, select, input, textarea, .video-mockup-wrapper, .qty-btn, .catalog-card, .tab-btn';
    document.querySelectorAll(hoverElements).forEach(el => {
        // Clear previous listeners to avoid duplicates
        el.removeEventListener('mouseenter', addCursorHoverClass);
        el.removeEventListener('mouseleave', removeCursorHoverClass);
        
        el.addEventListener('mouseenter', addCursorHoverClass);
        el.addEventListener('mouseleave', removeCursorHoverClass);
    });
}

function addCursorHoverClass() {
    document.body.classList.add('cursor-hover');
}

function removeCursorHoverClass() {
    document.body.classList.remove('cursor-hover');
}

// ==========================================================================
// GSAP SCROLLYTELLING ANIMATION ENGINE
// ==========================================================================

function initGSAPAnimations() {

    // 1. Grid Parallax (Blueprint Background)
    gsap.to(".bg-grid-1", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
            trigger: "#scrollytelling-wrapper",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
    });

    gsap.to(".bg-grid-2", {
        yPercent: -35,
        ease: "none",
        scrollTrigger: {
            trigger: "#scrollytelling-wrapper",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
    });

    // 2. Main Scrollytelling Timeline for Central Valve / Fitting
    const mainTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#scrollytelling-wrapper",
            start: "top top",
            end: "bottom bottom",
            scrub: 1 // smooth scrubbing transition
        }
    });

    // From Hook (Section 1) to Specs (Section 2)
    // Rotate and scale up the central brass fitting
    mainTimeline.to("#hero-product", {
        rotation: -45,
        scale: 1.3,
        duration: 2
    });

    // From Specs (Section 2) to Anatomy (Section 3)
    // Return to front, scale up for anatomy explosion
    mainTimeline.to("#hero-product", {
        rotation: 0,
        scale: 1.55,
        yPercent: 0,
        xPercent: 0,
        duration: 2
    });
    mainTimeline.to("#anatomy-svg", {
        opacity: 1,
        duration: 1
    }, "<");

    // Trigger Anatomy SVG Lines and annotations
    initAnatomyLines();

    // From Anatomy (Section 3) to Craft/Video (Section 4)
    // Rotate slightly, scale to fit content on the left
    mainTimeline.to("#hero-product", {
        rotation: 35,
        scale: 1.15,
        duration: 2
    });
    mainTimeline.to("#anatomy-svg", {
        opacity: 0,
        duration: 1
    }, "<");

    // From Craft (Section 4) to Lineup/Catalog (Section 5)
    // Reset rotation and center fitting over catalog
    mainTimeline.to("#hero-product", {
        rotation: 0,
        scale: 0.85,
        yPercent: -20,
        duration: 2
    });

    // Fade explore scroll prompt out when scrolling deep
    gsap.to("#scroll-explore", {
        opacity: 0,
        scrollTrigger: {
            trigger: "#section-specs",
            start: "top bottom",
            end: "top center",
            scrub: true
        }
    });

    // From Catalog (Section 5) to final RFQ Portal (Section 6)
    // Scale and transition the fitting to the left sidebar position of RFQ form
    mainTimeline.to("#hero-product", {
        scale: 0.65,
        xPercent: -80,
        yPercent: -12,
        rotation: -15,
        duration: 2
    });

    // From RFQ Portal (Section 6) to Contact (Section 7)
    // Fade out the central product so it doesn't overlay contact information
    mainTimeline.to("#hero-product", {
        opacity: 0,
        duration: 2
    });
}

function initAnatomyLines() {
    // Setup paths stroke offsets to zero for length mapping
    const paths = ['#path-solenoid', '#path-spool', '#path-seals', '#path-mounting'];
    paths.forEach(pId => {
        const path = document.querySelector(pId);
        if (path) {
            const length = path.getTotalLength();
            gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        }
    });

    // GSAP ScrollTrigger to draw lines and fade in label cards
    const drawAnatomyCallouts = (pathId, calloutId, trigger) => {
        const path = document.querySelector(pathId);
        if (!path) return;

        gsap.to(path, {
            strokeDashoffset: 0,
            scrollTrigger: {
                trigger: trigger,
                start: "top center",
                end: "center center",
                scrub: true,
                onEnter: () => {
                    const card = document.querySelector(calloutId);
                    if (card) card.classList.add('active');
                },
                onLeave: () => {
                    const card = document.querySelector(calloutId);
                    if (card) card.classList.remove('active');
                },
                onEnterBack: () => {
                    const card = document.querySelector(calloutId);
                    if (card) card.classList.add('active');
                },
                onLeaveBack: () => {
                    const card = document.querySelector(calloutId);
                    if (card) card.classList.remove('active');
                }
            }
        });
    };

    drawAnatomyCallouts('#path-solenoid', '#callout-solenoid', '#section-anatomy');
    drawAnatomyCallouts('#path-spool', '#callout-spool', '#section-anatomy');
    drawAnatomyCallouts('#path-seals', '#callout-seals', '#section-anatomy');
    drawAnatomyCallouts('#path-mounting', '#callout-mounting', '#section-anatomy');
}

// ==========================================================================
// STICKY HEADER SCROLLSPY
// ==========================================================================

function initHeaderScrollSpy() {
    const sections = document.querySelectorAll('.scroll-section');
    const navLinks = document.querySelectorAll('.nav-link-item');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach(sec => {
            const secTop = sec.offsetTop;
            if (scrollPos >= secTop - 300) {
                currentSectionId = sec.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
}

// ==========================================================================
// PRODUCT CATALOG INTERACTIVE GRID
// ==========================================================================

function initProductCatalog() {
    const catalogGrid = document.getElementById('catalog-grid-items');
    const searchInput = document.getElementById('catalog-search-input');
    const tabBtns = document.querySelectorAll('.tab-btn');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.searchQuery = e.target.value.toLowerCase().trim();
            renderCatalog();
        });
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.currentFilter = btn.getAttribute('data-filter');
            console.log("Product filter changed to:", state.currentFilter);
            renderCatalog();
        });
    });

    // Initial render
    renderCatalog();
}

function renderCatalog() {
    const catalogGrid = document.getElementById('catalog-grid-items');
    if (!catalogGrid) return;

    catalogGrid.innerHTML = '';

    // Filter items
    const filteredProducts = products.filter(p => {
        const matchesCategory = state.currentFilter === 'all' || p.category === state.currentFilter;
        const matchesSearch = p.name.toLowerCase().includes(state.searchQuery) || p.sku.toLowerCase().includes(state.searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filteredProducts.length === 0) {
        catalogGrid.innerHTML = `
            <div class="no-results-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="40" height="40">
                    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <p>No components match your search filter criteria.</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(prod => {
        const specsHTML = Object.entries(prod.specs)
            .map(([label, val]) => `<div class="spec-row"><span>${label}:</span><span>${val}</span></div>`)
            .join('');

        const card = document.createElement('div');
        card.className = `catalog-card category-${prod.category}`;
        card.innerHTML = `
            <div class="catalog-card-image-wrap">
                <img src="${prod.image}" alt="${prod.name}">
                <div class="catalog-card-sku">${prod.sku}</div>
            </div>
            <div class="catalog-card-content">
                <span class="catalog-card-cat">${prod.category.toUpperCase()}</span>
                <h4>${prod.name}</h4>
                <div class="catalog-card-specs">
                    ${specsHTML}
                </div>
                <div class="catalog-card-footer">
                    <div class="catalog-card-price">
                        <span class="price-lbl">List Price</span>
                        <span class="price-val">$${prod.price.toFixed(2)}</span>
                    </div>
                    <button class="primary-btn accent-btn cta-btn add-catalog-item-btn" onclick="addSkuFromCatalog('${prod.sku}')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14">
                            <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        <span>Add</span>
                    </button>
                </div>
            </div>
        `;
        catalogGrid.appendChild(card);
    });

    // Refresh cursor hover listeners for newly created buttons
    refreshCursorHovers();
}

window.addSkuFromCatalog = function(sku) {
    const defaultQty = 10; // Default B2B batch sizing
    addToRFQ(sku, defaultQty);
    
    // Animate item to show addition success
    const skuSelect = document.getElementById('product-sku-select');
    if (skuSelect) {
        skuSelect.value = sku;
        updatePortalCalculator();
    }
    
    // Smooth scroll down to RFQ Cart or alert user
    const notice = document.createElement('div');
    notice.className = 'toast-notification';
    notice.innerHTML = `<span>Added ${sku} (x${defaultQty}) to RFQ Cart. Scroll down to review.</span>`;
    document.body.appendChild(notice);
    
    gsap.to(notice, { opacity: 1, y: -20, duration: 0.3 });
    setTimeout(() => {
        gsap.to(notice, { opacity: 0, y: 0, duration: 0.3, onComplete: () => notice.remove() });
    }, 3000);
};

// ==========================================================================
// B2B PORTAL INTERACTIVE LOGIC (RFQ & PRICING)
// ==========================================================================

function initB2BPortalLogic() {
    const skuSelect = document.getElementById('product-sku-select');
    const qtyInput = document.getElementById('product-qty-input');
    const qtyDecBtn = document.getElementById('rfq-select-qty-dec');
    const qtyIncBtn = document.getElementById('rfq-select-qty-inc');
    const addRfqBtn = document.getElementById('btn-portal-add-rfq');
    const cadBtn = document.getElementById('btn-portal-cad-download');

    // Populate SKU select element dynamically from the full product catalog
    if (skuSelect) {
        skuSelect.innerHTML = '';
        products.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.sku;
            opt.textContent = `${p.sku} | ${p.name} ($${p.price.toFixed(2)})`;
            skuSelect.appendChild(opt);
        });
    }

    // Volumetric Pricing Calculator triggers
    if (skuSelect && qtyInput) {
        skuSelect.addEventListener('change', updatePortalCalculator);
        qtyInput.addEventListener('input', updatePortalCalculator);
    }

    if (qtyDecBtn && qtyInput) {
        qtyDecBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let val = parseInt(qtyInput.value) || 1;
            val = val > 1 ? val - 1 : 1;
            qtyInput.value = val;
            updatePortalCalculator();
        });
    }

    if (qtyIncBtn && qtyInput) {
        qtyIncBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let val = parseInt(qtyInput.value) || 1;
            qtyInput.value = val + 1;
            updatePortalCalculator();
        });
    }

    if (addRfqBtn) {
        addRfqBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const sku = skuSelect.value;
            const qty = parseInt(qtyInput.value) || 1;
            addToRFQ(sku, qty);
        });
    }

    if (cadBtn) {
        cadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const sku = skuSelect.value;
            const prod = products.find(p => p.sku === sku);
            if (prod) {
                alert(`Downloading CAD STEP File: ${prod.cadFile}\nVerifying geometric tolerance compatibility...`);
            }
        });
    }

    // Toggle CSV bulk order pad
    const toggleBulkBtn = document.getElementById('btn-toggle-bulk-pad');
    const bulkWrapper = document.getElementById('bulk-pad-wrapper');
    if (toggleBulkBtn && bulkWrapper) {
        toggleBulkBtn.addEventListener('click', (e) => {
            e.preventDefault();
            bulkWrapper.classList.toggle('active');
        });
    }

    // Bulk Order Pad commands
    const bulkClear = document.getElementById('btn-bulk-clear');
    const bulkValidate = document.getElementById('btn-bulk-validate');
    const bulkInput = document.getElementById('bulk-input-area');
    
    if (bulkClear && bulkInput) {
        bulkClear.addEventListener('click', (e) => {
            e.preventDefault();
            bulkInput.value = '';
            document.getElementById('bulk-feedback-drawer').classList.remove('active');
        });
    }

    if (bulkValidate && bulkInput) {
        bulkValidate.addEventListener('click', (e) => {
            e.preventDefault();
            parseBulkCSVInput();
        });
    }

    // RFQ Clear all
    const rfqClearAll = document.getElementById('btn-rfq-clear-all');
    if (rfqClearAll) {
        rfqClearAll.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Clear all items from this Request for Quote?')) {
                clearRFQ();
            }
        });
    }

    // RFQ submission handling
    const rfqForm = document.getElementById('rfq-submission-form');
    if (rfqForm) {
        rfqForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (state.rfqCart.length === 0) {
                alert('Your cart/RFQ is empty. Please select a component and click "Add to RFQ Cart" or "Buy Now".');
                return;
            }

            const phoneVal = document.getElementById('rfq-phone').value;
            const emailVal = document.getElementById('rfq-email').value;
            const projName = document.getElementById('rfq-proj-name').value;
            const deadlineVal = document.getElementById('rfq-deadline').value;

            const paymentMode = document.querySelector('input[name="payment-mode"]:checked').value;
            if (paymentMode === 'quote') {
                const rfqId = `RFQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
                
                const notesVal = document.getElementById('rfq-notes')?.value || '';
                
                const order = {
                    id: rfqId,
                    phone: phoneVal.trim(),
                    email: emailVal.trim(),
                    projectName: projName,
                    deadline: deadlineVal,
                    notes: notesVal,
                    items: state.rfqCart.map(item => {
                        const prod = products.find(p => p.sku === item.sku);
                        return { sku: item.sku, qty: item.qty, name: prod?.name || '', price: prod?.price || 0 };
                    }),
                    total: document.getElementById('summary-est-total').textContent,
                    type: 'quote',
                    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                    status: 'RFQ Submitted',
                    tracking: [
                        { status: 'RFQ Submitted', date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), completed: true, detail: 'RFQ received and added to engineering queue.' },
                        { status: 'Quote Preparation', date: 'In Progress', completed: false, detail: 'S. Shaik Shabeer verifying copper/brass LME commodity pricing.' },
                        { status: 'Ready for Approval', date: '', completed: false, detail: 'Formal PDF quote will be dispatched to ' + emailVal }
                    ]
                };
                
                saveOrderToLocalStorage(order);
                setSessionPhone(phoneVal.trim());
                openSuccessModal('rfq', rfqId, emailVal.trim());
            } else {
                const addressVal = document.getElementById('checkout-address').value;
                const gstinVal = document.getElementById('checkout-gstin')?.value || '';
                
                state.tempOrder = {
                    phone: phoneVal.trim(),
                    email: emailVal.trim(),
                    projectName: projName,
                    deadline: deadlineVal,
                    address: addressVal,
                    gstin: gstinVal,
                    items: state.rfqCart.map(item => {
                        const prod = products.find(p => p.sku === item.sku);
                        return { sku: item.sku, qty: item.qty, name: prod?.name || '', price: prod?.price || 0 };
                    }),
                    total: document.getElementById('summary-est-total').textContent
                };
                
                openPaymentModal();
            }
        });
    }

    // Payment Mode Radio Toggle event listeners
    const paymentModeRadios = document.querySelectorAll('input[name="payment-mode"]');
    const engNotesGroup = document.getElementById('group-engineering-notes');
    const checkoutFieldsGroup = document.getElementById('group-checkout-fields');
    const checkoutAddress = document.getElementById('checkout-address');
    const submitBtn = document.getElementById('btn-submit-rfq-order');

    paymentModeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'quote') {
                if (engNotesGroup) engNotesGroup.classList.remove('d-none');
                if (checkoutFieldsGroup) checkoutFieldsGroup.classList.add('d-none');
                if (checkoutAddress) checkoutAddress.required = false;
                if (submitBtn) submitBtn.textContent = 'Submit Request for Quote';
            } else {
                if (engNotesGroup) engNotesGroup.classList.add('d-none');
                if (checkoutFieldsGroup) checkoutFieldsGroup.classList.remove('d-none');
                if (checkoutAddress) checkoutAddress.required = true;
                if (submitBtn) submitBtn.textContent = 'Proceed to Secure Payment';
            }
        });
    });

    // Buy Now / Pay Online button listener
    const buyNowBtn = document.getElementById('btn-portal-buy-now');
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const sku = skuSelect.value;
            const qty = parseInt(qtyInput.value) || 1;
            
            // Add item to RFQ cart
            addToRFQ(sku, qty);
            
            // Set transaction mode to Direct Online Checkout (Pay Now)
            const radioCheckout = document.querySelector('input[name="payment-mode"][value="checkout"]');
            if (radioCheckout) {
                radioCheckout.checked = true;
                // Trigger change event to swap form fields and button text
                radioCheckout.dispatchEvent(new Event('change'));
            }

            // Scroll smoothly to the checkout card
            const formCard = document.querySelector('.quote-submission-card');
            if (formCard) {
                formCard.scrollIntoView({ behavior: 'smooth' });
            }

            // Show toast notification
            const notice = document.createElement('div');
            notice.className = 'toast-notification';
            notice.innerHTML = `<span>Added ${sku} (x${qty}) to cart and swapped to Pay Now checkout.</span>`;
            document.body.appendChild(notice);
            gsap.to(notice, { opacity: 1, y: -20, duration: 0.3 });
            setTimeout(() => {
                gsap.to(notice, { opacity: 0, y: 0, duration: 0.3, onComplete: () => notice.remove() });
            }, 3000);
        });
    }

    // Razorpay Widget tab navigation listeners
    const payTabBtns = document.querySelectorAll('.pay-tab-btn');
    const payTabContents = document.querySelectorAll('.pay-tab-content');
    payTabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = btn.getAttribute('data-tab');
            
            payTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            payTabContents.forEach(c => c.classList.remove('active'));
            const targetContent = document.getElementById(`tab-content-${tabId}`);
            if (targetContent) targetContent.classList.add('active');
        });
    });

    // Razorpay Card formatting helpers
    const cardNumInput = document.getElementById('pay-card-num');
    if (cardNumInput) {
        cardNumInput.addEventListener('input', (e) => {
            let val = e.target.value.replace(/\D/g, '');
            let formatted = '';
            for (let i = 0; i < val.length; i++) {
                if (i > 0 && i % 4 === 0) formatted += ' ';
                formatted += val[i];
            }
            e.target.value = formatted.substring(0, 19);
        });
    }

    const cardExpiryInput = document.getElementById('pay-card-expiry');
    if (cardExpiryInput) {
        cardExpiryInput.addEventListener('input', (e) => {
            let val = e.target.value.replace(/\D/g, '');
            if (val.length > 2) {
                e.target.value = val.substring(0, 2) + ' / ' + val.substring(2, 4);
            } else {
                e.target.value = val;
            }
        });
    }

    // Razorpay Pay Now button handler
    const payNowBtn = document.getElementById('btn-widget-pay');
    if (payNowBtn) {
        payNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const loader = document.getElementById('payment-widget-loader');
            if (loader) loader.classList.add('active');
            
            setTimeout(() => {
                if (loader) loader.classList.remove('active');
                
                const payModal = document.getElementById('payment-modal');
                if (payModal) payModal.classList.remove('active');
                
                const randomHex = Math.floor(0x1000 + Math.random() * 0xF000).toString(16).toUpperCase();
                const orderId = `SB-2026-${randomHex}`;
                
                if (state.tempOrder) {
                    const order = {
                        id: orderId,
                        phone: state.tempOrder.phone,
                        email: state.tempOrder.email,
                        projectName: state.tempOrder.projectName,
                        deadline: state.tempOrder.deadline,
                        address: state.tempOrder.address,
                        gstin: state.tempOrder.gstin,
                        items: state.tempOrder.items,
                        total: state.tempOrder.total,
                        type: 'order',
                        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                        status: 'Ordered',
                        tracking: [
                            { status: 'Ordered', date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), completed: true, detail: 'Payment confirmed. Warehouse order ledger synchronized.' },
                            { status: 'Dispatched', date: 'Expected tomorrow', completed: false, detail: 'Preparing freight consignment at Washermenpet Facility, Chennai via SB Logistics.' },
                            { status: 'In Transit', date: '', completed: false, detail: 'In-transit status will be updated via SMS/Email.' },
                            { status: 'Delivered', date: '', completed: false, detail: 'Recipient signature verification required.' }
                        ]
                    };
                    saveOrderToLocalStorage(order);
                    setSessionPhone(state.tempOrder.phone);
                    openSuccessModal('order', orderId, state.tempOrder.email);
                    state.tempOrder = null;
                } else {
                    openSuccessModal('order', orderId);
                }
            }, 1800);
        });
    }

    // Razorpay Cancel Transaction button handler
    const cancelPayBtn = document.getElementById('btn-widget-cancel');
    if (cancelPayBtn) {
        cancelPayBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const payModal = document.getElementById('payment-modal');
            if (payModal) payModal.classList.remove('active');
        });
    }

    // Close success modal
    const closeModal = document.getElementById('btn-close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('success-modal').classList.remove('active');
            clearRFQ();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Set default deadline date
    const deadlineInput = document.getElementById('rfq-deadline');
    if (deadlineInput) {
        const date = new Date();
        date.setDate(date.getDate() + 14); // 2-week lead
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        deadlineInput.value = `${yyyy}-${mm}-${dd}`;
    }

    // Run initial calculator update
    updatePortalCalculator();
}

function calculateTierDiscount(qty) {
    if (qty >= 200) return 0.25; // 25% off 200+
    if (qty >= 50) return 0.20;  // 20% off 50-199
    if (qty >= 10) return 0.10;  // 10% off 10-49
    return 0.0;
}

function updatePortalCalculator() {
    const skuSelect = document.getElementById('product-sku-select');
    const qtyInput = document.getElementById('product-qty-input');
    const discTag = document.getElementById('portal-discount-tag');
    const subtotalDisplay = document.getElementById('portal-subtotal-display');

    if (!skuSelect || !qtyInput || !discTag || !subtotalDisplay) return;

    const sku = skuSelect.value;
    const qty = parseInt(qtyInput.value) || 1;

    const prod = products.find(p => p.sku === sku);
    if (!prod) return;

    const discountPct = calculateTierDiscount(qty);
    const unitPrice = prod.price * (1 - discountPct);
    const subtotalVal = unitPrice * qty;

    if (discountPct > 0) {
        discTag.textContent = `${Math.round(discountPct * 100)}% Volume Disc`;
        discTag.style.color = 'var(--color-gold)';
    } else {
        discTag.textContent = `List Price`;
        discTag.style.color = 'rgba(255, 255, 255, 0.6)';
    }

    subtotalDisplay.textContent = `$${subtotalVal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// ==========================================================================
// RFQ CART STATE OPERATIONS
// ==========================================================================

function addToRFQ(sku, qty) {
    const existingIndex = state.rfqCart.findIndex(item => item.sku === sku);
    if (existingIndex > -1) {
        state.rfqCart[existingIndex].qty += qty;
    } else {
        state.rfqCart.push({
            sku: sku,
            qty: qty,
            customNotes: ''
        });
    }

    updateRFQDisplay();
}

window.removeFromRFQ = function(sku) {
    state.rfqCart = state.rfqCart.filter(item => item.sku !== sku);
    updateRFQDisplay();
};

function updateRFQQuantity(sku, qty) {
    const idx = state.rfqCart.findIndex(item => item.sku === sku);
    if (idx > -1) {
        state.rfqCart[idx].qty = qty;
        if (state.rfqCart[idx].qty < 1) {
            state.rfqCart[idx].qty = 1;
        }
    }
    updateRFQDisplay();
}

function clearRFQ() {
    state.rfqCart = [];
    updateRFQDisplay();
}

function updateRFQDisplay() {
    renderRFQItems();
    calculateRFQTotals();

    const clearAllBtn = document.getElementById('btn-rfq-clear-all');
    if (clearAllBtn) {
        clearAllBtn.style.display = state.rfqCart.length > 0 ? 'inline-block' : 'none';
    }

    if (state.loggedInPhone) {
        localStorage.setItem(`sb_cart_${state.loggedInPhone}`, JSON.stringify(state.rfqCart));
    }
}

function renderRFQItems() {
    const container = document.getElementById('rfq-items-container');
    const emptyMsg = document.getElementById('empty-rfq-msg');
    if (!container) return;

    // Clear old rows
    const rows = container.querySelectorAll('.rfq-item-row');
    rows.forEach(r => r.remove());

    if (state.rfqCart.length === 0) {
        if (emptyMsg) emptyMsg.style.display = 'block';
        return;
    }

    if (emptyMsg) emptyMsg.style.display = 'none';

    state.rfqCart.forEach(item => {
        const prod = products.find(p => p.sku === item.sku);
        if (!prod) return;

        const discountPct = calculateTierDiscount(item.qty);
        const subtotalVal = (prod.price * (1 - discountPct)) * item.qty;

        const row = document.createElement('div');
        row.className = 'rfq-item-row';
        row.innerHTML = `
            <div class="rfq-row-info">
                <span class="rfq-row-sku">SKU: ${prod.sku}</span>
                <span class="rfq-row-title">${prod.name}</span>
                <span class="rfq-row-pricing">$${prod.price.toFixed(2)} unit | Qty Disc: ${Math.round(discountPct * 100)}%</span>
            </div>
            <div class="rfq-qty-block">
                <span>Qty</span>
                <input type="number" id="rfq-qty-${item.sku}" value="${item.qty}" min="1" oninput="changeRFQItemQtyInput('${item.sku}')">
            </div>
            <div class="rfq-row-total">
                $${subtotalVal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <button class="rfq-row-remove" onclick="removeFromRFQ('${item.sku}')">✕</button>
        `;

        container.appendChild(row);
    });

    // Refresh cursor hover states for new list rows
    refreshCursorHovers();
}

window.changeRFQItemQtyInput = function(sku) {
    const input = document.getElementById(`rfq-qty-${sku}`);
    if (!input) return;
    const qty = parseInt(input.value) || 1;
    updateRFQQuantity(sku, qty);
};

function calculateRFQTotals() {
    let itemsCount = 0;
    let baseValue = 0;
    let finalEstValue = 0;

    state.rfqCart.forEach(item => {
        const prod = products.find(p => p.sku === item.sku);
        if (!prod) return;

        itemsCount += item.qty;
        const itemBaseSubtotal = prod.price * item.qty;
        baseValue += itemBaseSubtotal;

        const discountPct = calculateTierDiscount(item.qty);
        const itemDiscountedSubtotal = itemBaseSubtotal * (1 - discountPct);
        finalEstValue += itemDiscountedSubtotal;
    });

    // Gold Membership 15% standard discount applied over volumetric discounts
    const clientBaseDiscount = finalEstValue * CLIENT_BASE_DISCOUNT_PCT;
    const estimatedTotal = finalEstValue - clientBaseDiscount;

    const summaryItems = document.getElementById('summary-items-count');
    const summaryBase = document.getElementById('summary-base-value');
    const summaryDiscount = document.getElementById('summary-discount-value');
    const summaryTotal = document.getElementById('summary-est-total');

    if (summaryItems) summaryItems.textContent = itemsCount;
    if (summaryBase) summaryBase.textContent = `$${baseValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (summaryDiscount) summaryDiscount.textContent = `-$${(baseValue - estimatedTotal).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (Volumetric + 15% Gold)`;
    if (summaryTotal) summaryTotal.textContent = `$${estimatedTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// ==========================================================================
// CSV TEXT PARSER FOR BULK PROCUREMENT PAD
// ==========================================================================

function parseBulkCSVInput() {
    const bulkInput = document.getElementById('bulk-input-area');
    const feedbackDrawer = document.getElementById('bulk-feedback-drawer');
    if (!bulkInput || !feedbackDrawer) return;

    const rawText = bulkInput.value.trim();
    if (!rawText) return;

    const lines = rawText.split('\n');
    const validItems = [];
    const invalidItems = [];

    lines.forEach((line, idx) => {
        const cleaned = line.trim();
        if (!cleaned) return;

        // Split by commas, tabs, semicolons or spaces
        const parts = cleaned.split(/[\s,;\t]+/);
        const skuCandidate = parts[0]?.toUpperCase().trim();
        const qtyCandidate = parseInt(parts[1]) || 1;

        const match = products.find(p => p.sku === skuCandidate);
        if (match) {
            validItems.push({
                sku: match.sku,
                name: match.name,
                qty: qtyCandidate,
                price: match.price
            });
        } else {
            invalidItems.push({
                lineNum: idx + 1,
                text: cleaned,
                reason: `SKU '${skuCandidate}' not found in registry.`
            });
        }
    });

    renderBulkFeedback(validItems, invalidItems);
}

function renderBulkFeedback(valid, invalid) {
    const feedbackDrawer = document.getElementById('bulk-feedback-drawer');
    if (!feedbackDrawer) return;

    feedbackDrawer.classList.add('active');
    feedbackDrawer.innerHTML = '';

    const card = document.createElement('div');
    card.className = 'feedback-card';

    let titleHTML = '';
    let commitBtnHTML = '';

    if (invalid.length === 0) {
        titleHTML = `<div class="feedback-title success">✓ All ${valid.length} SKUs Validated Successfully!</div>`;
        const validJSONString = JSON.stringify(valid).replace(/"/g, '&quot;');
        commitBtnHTML = `<button class="primary-btn accent-btn cta-btn btn-full" style="margin-top: 10px;" onclick="commitBulkToRFQJSON('${validJSONString}')">Commit to RFQ Cart</button>`;
    } else {
        titleHTML = `<div class="feedback-title error">⚠ ${invalid.length} Validation Errors Found</div>`;
    }

    let rowsHTML = '';
    valid.forEach(v => {
        rowsHTML += `<div class="feedback-row-item" style="color: var(--color-success);">
            <span>${v.sku} (x${v.qty})</span>
            <span>Valid</span>
        </div>`;
    });

    invalid.forEach(inv => {
        rowsHTML += `<div class="feedback-row-item" style="color: var(--color-accent);">
            <span>Line ${inv.lineNum}: "${inv.text}"</span>
            <span>${inv.reason}</span>
        </div>`;
    });

    card.innerHTML = `
        ${titleHTML}
        <div class="feedback-rows" style="margin-top: 8px; display: flex; flex-direction: column; gap: 4px;">
            ${rowsHTML}
        </div>
        ${commitBtnHTML}
    `;

    feedbackDrawer.appendChild(card);
    refreshCursorHovers();
}

window.commitBulkToRFQJSON = function(itemsJSON) {
    try {
        const items = JSON.parse(itemsJSON);
        if (!items || items.length === 0) return;

        items.forEach(item => {
            addToRFQ(item.sku, item.qty);
        });

        // Clear bulk fields
        document.getElementById('bulk-input-area').value = '';
        const feedback = document.getElementById('bulk-feedback-drawer');
        feedback.classList.remove('active');
        feedback.innerHTML = '';
        document.getElementById('bulk-pad-wrapper').classList.remove('active');

        alert(`Added ${items.length} bulk line items to RFQ.`);
    } catch (e) {
        console.error('Failed to commit bulk items', e);
        alert('An error occurred while committing items.');
    }
};

function openPaymentModal() {
    const payModal = document.getElementById('payment-modal');
    const amountDisplay = document.getElementById('payment-widget-amount');
    const cartTotalText = document.getElementById('summary-est-total').textContent;
    
    if (amountDisplay) amountDisplay.textContent = cartTotalText;
    
    // Clear card/payment fields
    const cardNum = document.getElementById('pay-card-num');
    const expiry = document.getElementById('pay-card-expiry');
    const cvv = document.getElementById('pay-card-cvv');
    const upiId = document.getElementById('pay-upi-id');
    
    if (cardNum) cardNum.value = '';
    if (expiry) expiry.value = '';
    if (cvv) cvv.value = '';
    if (upiId) upiId.value = '';
    
    // Hide loader
    const loader = document.getElementById('payment-widget-loader');
    if (loader) loader.classList.remove('active');
    
    if (payModal) payModal.classList.add('active');
}

function openSuccessModal(type, referenceId, customerEmail) {
    const successModal = document.getElementById('success-modal');
    const title = successModal.querySelector('h2');
    const text = successModal.querySelector('p');
    const label = successModal.querySelector('.quote-number-tag span');
    const val = document.getElementById('generated-rfq-id');
    
    const emailToUse = customerEmail || 'sb.ent@yahoo.com';

    if (type === 'rfq') {
        title.textContent = 'RFQ Submitted Successfully!';
        text.innerHTML = `Your Request for Quote has been queued. S. Shaik Shabeer or our sales team will contact you at <strong>${emailToUse}</strong> within 2 business hours with a formal PDF quote.`;
        label.textContent = 'Quote Reference: ';
        val.textContent = referenceId;
    } else {
        title.textContent = 'Order Placed Successfully!';
        text.innerHTML = `Your payment has been processed. Your tax invoice and tracking details have been sent to <strong>${emailToUse}</strong>.`;
        label.textContent = 'Order ID: ';
        val.textContent = referenceId;
    }
    
    successModal.classList.add('active');
}

// ==========================================================================
// SESSION AND STORAGE OPERATION HELPERS
// ==========================================================================

function loadOrdersFromLocalStorage() {
    try {
        const stored = localStorage.getItem('sb_orders');
        state.orders = stored ? JSON.parse(stored) : [];
    } catch (e) {
        console.error('Failed to load orders', e);
        state.orders = [];
    }
}

function saveOrderToLocalStorage(order) {
    try {
        loadOrdersFromLocalStorage();
        state.orders.push(order);
        localStorage.setItem('sb_orders', JSON.stringify(state.orders));
    } catch (e) {
        console.error('Failed to save order', e);
    }
}

function setSessionPhone(phone) {
    state.loggedInPhone = phone;
    localStorage.setItem('sb_logged_in_phone', phone);
    
    // Update navbar avatar button status
    const avatarBtn = document.getElementById('nav-avatar-btn');
    if (avatarBtn) {
        avatarBtn.classList.add('logged-in');
        avatarBtn.setAttribute('title', `Logged in as ${phone} | Click for Profile`);
    }

    // Try to load any saved cart for this user
    const savedCart = localStorage.getItem(`sb_cart_${phone}`);
    if (savedCart) {
        try {
            state.rfqCart = JSON.parse(savedCart);
            updateRFQDisplay();
        } catch (e) {
            console.error('Failed to parse saved cart', e);
        }
    }
}

function clearSession() {
    // Save cart before clearing
    if (state.loggedInPhone && state.rfqCart.length > 0) {
        localStorage.setItem(`sb_cart_${state.loggedInPhone}`, JSON.stringify(state.rfqCart));
    }

    state.loggedInPhone = null;
    localStorage.removeItem('sb_logged_in_phone');
    
    const avatarBtn = document.getElementById('nav-avatar-btn');
    if (avatarBtn) {
        avatarBtn.classList.remove('logged-in');
        avatarBtn.setAttribute('title', 'Client Profile & Order Status');
    }

    clearRFQ();
}

// ==========================================================================
// B2B CLIENT PORTAL INTERFACE HANDLERS
// ==========================================================================

function initClientPortal() {
    loadOrdersFromLocalStorage();
    
    // Auto sync session on load
    const savedPhone = localStorage.getItem('sb_logged_in_phone');
    if (savedPhone) {
        setSessionPhone(savedPhone);
    }

    const avatarBtn = document.getElementById('nav-avatar-btn');
    const closeBtn = document.getElementById('btn-portal-close');
    const loginForm = document.getElementById('portal-login-form');
    const logoutBtn = document.getElementById('btn-portal-logout');
    const resumeBtn = document.getElementById('btn-portal-resume');
    const orderSelect = document.getElementById('portal-order-select');

    if (avatarBtn) {
        avatarBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleAvatarModal();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleAvatarModal();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const phoneInput = document.getElementById('portal-phone-input');
            if (phoneInput) {
                const phoneVal = phoneInput.value.trim();
                if (phoneVal) {
                    setSessionPhone(phoneVal);
                    renderB2BDashboard();
                }
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            clearSession();
            
            // Switch back to login state view
            document.getElementById('portal-login-state').classList.remove('d-none');
            document.getElementById('portal-dashboard-state').classList.add('d-none');
        });
    }

    if (resumeBtn) {
        resumeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleAvatarModal();
        });
    }

    if (orderSelect) {
        orderSelect.addEventListener('change', (e) => {
            renderB2BDashboard(e.target.value);
        });
    }
}

function toggleAvatarModal() {
    const modal = document.getElementById('avatar-modal');
    if (!modal) return;
    
    if (modal.classList.contains('active')) {
        modal.classList.remove('active');
    } else {
        if (state.loggedInPhone) {
            renderB2BDashboard();
        } else {
            // Show login form
            document.getElementById('portal-login-state').classList.remove('d-none');
            document.getElementById('portal-dashboard-state').classList.add('d-none');
            const phoneInput = document.getElementById('portal-phone-input');
            if (phoneInput) phoneInput.value = '';
        }
        modal.classList.add('active');
    }
}

function renderB2BDashboard(selectedOrderId) {
    if (!state.loggedInPhone) return;

    // Update profile header phone text
    const displayPhone = document.getElementById('dashboard-user-phone');
    if (displayPhone) displayPhone.textContent = state.loggedInPhone;

    // Filter user orders
    loadOrdersFromLocalStorage();
    const userOrders = state.orders.filter(o => o.phone === state.loggedInPhone);

    const loginState = document.getElementById('portal-login-state');
    const dashboardState = document.getElementById('portal-dashboard-state');
    const selectContainer = document.getElementById('portal-order-selector-container');
    const orderSelect = document.getElementById('portal-order-select');
    const trackerContainer = document.getElementById('portal-active-tracker-container');

    if (loginState) loginState.classList.add('d-none');
    if (dashboardState) dashboardState.classList.remove('d-none');

    // Populate order selector
    if (userOrders.length > 1) {
        if (selectContainer) selectContainer.classList.remove('d-none');
        if (orderSelect) {
            orderSelect.innerHTML = '';
            userOrders.forEach(o => {
                const opt = document.createElement('option');
                opt.value = o.id;
                opt.textContent = `${o.id} | ${o.projectName} (${o.type.toUpperCase()})`;
                if (selectedOrderId && o.id === selectedOrderId) {
                    opt.selected = true;
                } else if (!selectedOrderId && o.id === userOrders[userOrders.length - 1].id) {
                    opt.selected = true;
                }
                orderSelect.appendChild(opt);
            });
        }
    } else {
        if (selectContainer) selectContainer.classList.add('d-none');
    }

    // Render active tracker
    if (userOrders.length === 0) {
        if (trackerContainer) {
            trackerContainer.innerHTML = `
                <div style="text-align: center; padding: 30px 10px; color: var(--color-text-muted);">
                    <div style="font-size: 2rem; margin-bottom: 10px;">📦</div>
                    <h4 style="color: var(--color-primary-dark); font-size: 0.9rem; margin-bottom: 5px; font-family: var(--font-display); font-weight: 800;">Welcome to SB Enterprises B2B Portal</h4>
                    <p style="font-size: 0.75rem; line-height: 1.4; max-width: 320px; margin: 0 auto;">No active quotes or checkout orders found for this number yet. Start shopping and submit an RFQ to track its engineering and logistics status here.</p>
                </div>
            `;
        }
    } else {
        const activeOrder = selectedOrderId ? userOrders.find(o => o.id === selectedOrderId) : userOrders[userOrders.length - 1];
        if (!activeOrder) return;

        const activeIndex = activeOrder.tracking.findIndex(s => s.status === activeOrder.status);
        const totalSteps = activeOrder.tracking.length;
        const progressPct = totalSteps > 1 ? (activeIndex / (totalSteps - 1)) * 100 : 0;

        let trackingHtml = `
            <div class="order-tracker-card">
                <div class="tracker-card-header">
                    <div class="tracker-id-block">
                        <span class="tracker-label">TRACKING ID</span>
                        <span class="tracker-id">${activeOrder.id}</span>
                    </div>
                    <span class="tracker-type-badge type-${activeOrder.type}">${activeOrder.type === 'quote' ? 'RFQ QUOTE' : 'PAID ORDER'}</span>
                </div>
                
                <div class="tracker-summary-row">
                    <span>Project: <strong>${activeOrder.projectName}</strong></span>
                    <span>Total: <strong>${activeOrder.total}</strong></span>
                </div>
                
                <!-- STEPPER PROGRESS BAR -->
                <div class="order-stepper">
                    <div class="order-stepper-progress" style="width: ${progressPct}%;"></div>
        `;

        activeOrder.tracking.forEach((step, idx) => {
            const isCompleted = idx <= activeIndex;
            const isActive = idx === activeIndex;
            trackingHtml += `
                <div class="step-node ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}">
                    <div class="step-circle">
                        ${isCompleted ? '✓' : idx + 1}
                    </div>
                    <span class="step-title">${step.status}</span>
                    <span class="step-date">${step.date || ''}</span>
                </div>
            `;
        });

        const activeStepObj = activeOrder.tracking[activeIndex] || activeOrder.tracking[0];

        trackingHtml += `
                </div>
                
                <div class="tracker-status-details">
                    <div class="status-detail-pulse"></div>
                    <div class="status-detail-text">
                        <h4>${activeStepObj.status}</h4>
                        <p>${activeStepObj.detail || 'Consignment processing in progress.'}</p>
                    </div>
                </div>

                <!-- ITEM LIST -->
                <div class="tracker-item-list">
                    <h5>Consignment Contents</h5>
                    <div class="tracker-items-scroll">
        `;

        activeOrder.items.forEach(item => {
            trackingHtml += `
                <div class="tracker-item-row">
                    <span>${item.name} (SKU: ${item.sku})</span>
                    <span>Qty: ${item.qty}</span>
                </div>
            `;
        });

        trackingHtml += `
                    </div>
                </div>
            </div>
        `;

        if (trackerContainer) trackerContainer.innerHTML = trackingHtml;
    }
}
