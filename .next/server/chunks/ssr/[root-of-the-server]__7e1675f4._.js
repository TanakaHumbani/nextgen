module.exports = {

"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}}),
"[externals]/react-dom [external] (react-dom, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[project]/data/products.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "products": ()=>products
});
const products = [
    // Construction materials
    {
        id: 'prod1',
        name: 'Aggregates',
        category: 'Construction materials',
        image: '/images/aggregates.jpg',
        description: 'Durable aggregates for construction and foundation use.'
    },
    {
        id: 'prod2',
        name: 'Cement',
        category: 'Construction materials',
        image: '/images/cement.png',
        description: 'High-strength cement for various construction needs.'
    },
    {
        id: 'prod3',
        name: 'Bricks',
        category: 'Construction materials',
        image: '/images/red-brick.jpg',
        description: 'Premium quality bricks for building walls and structures.'
    },
    {
        id: 'prod4',
        name: 'Bitumen products',
        category: 'Construction materials',
        image: '/images/bitumen.png',
        description: 'Bitumen products for road and waterproofing applications.'
    },
    {
        id: 'prod5',
        name: 'Concrete Mixer',
        category: 'Construction materials',
        image: '/images/concrete-mixer.png',
        description: 'Heavy-duty concrete mixer for efficient on-site mixing.'
    },
    // Electrical Products
    {
        id: 'prod6',
        name: 'Transformers',
        category: 'Electrical Products',
        image: '/images/transformer.jpg',
        description: 'Reliable transformers for power distribution.'
    },
    {
        id: 'prod7',
        name: 'UPS Systems',
        category: 'Electrical Products',
        image: '/images/ups.jpg',
        description: 'Uninterrupted power supply systems for backup energy.'
    },
    {
        id: 'prod8',
        name: 'Generators',
        category: 'Electrical Products',
        image: '/images/generator.jpg',
        description: 'Portable and industrial generators for backup power.'
    },
    {
        id: 'prod9',
        name: 'Cables',
        category: 'Electrical Products',
        image: '/images/cables.jpg',
        description: 'High-performance electrical cables and wiring.'
    },
    {
        id: 'prod10',
        name: 'Switchgear',
        category: 'Electrical Products',
        image: '/images/switchgear.jpg',
        description: 'Electrical switchgear systems for safety and control.'
    },
    {
        id: 'prod11',
        name: 'Inverters',
        category: 'Electrical Products',
        image: '/images/inverter.jpg',
        description: 'Efficient inverters for converting DC to AC power.'
    },
    {
        id: 'prod12',
        name: 'Power Factor Correction Unit',
        category: 'Electrical Products',
        image: '/images/pfc-unit.jpg',
        description: 'Optimize power usage with correction units.'
    },
    // Furniture, Office equipment
    {
        id: 'prod13',
        name: 'Office Desks',
        category: 'Furniture, Office equipment',
        image: '/images/office-desk.jpg',
        description: 'Modern office desks for a productive workspace.'
    },
    {
        id: 'prod14',
        name: 'Swivel Chairs',
        category: 'Furniture, Office equipment',
        image: '/images/swivel-chair.jpg',
        description: 'Comfortable swivel chairs with ergonomic design.'
    },
    {
        id: 'prod15',
        name: 'Visitors Chairs',
        category: 'Furniture, Office equipment',
        image: '/images/visitors-chair.jpg',
        description: 'Stylish chairs for office visitors.'
    },
    {
        id: 'prod16',
        name: 'Boardroom Tables and Chairs',
        category: 'Furniture, Office equipment',
        image: '/images/boardroom.jpg',
        description: 'Professional boardroom furniture for meetings.'
    },
    {
        id: 'prod17',
        name: 'Student Desks and Chairs',
        category: 'Furniture, Office equipment',
        image: '/images/student-desk.jpg',
        description: 'Durable student furniture for classrooms.'
    },
    {
        id: 'prod18',
        name: 'Filing Cabinets',
        category: 'Furniture, Office equipment',
        image: '/images/filing-cabinet.jpg',
        description: 'Secure filing cabinets for organized storage.'
    },
    {
        id: 'prod19',
        name: 'Beds',
        category: 'Furniture, Office equipment',
        image: '/images/bed.jpg',
        description: 'Comfortable and sturdy beds for various needs.'
    },
    {
        id: 'prod20',
        name: 'Water Dispensers',
        category: 'Furniture, Office equipment',
        image: '/images/water-dispenser.jpg',
        description: 'Convenient hot and cold water dispensers.'
    },
    // Lubricants
    {
        id: 'prod21',
        name: 'Lubricant Oils',
        category: 'Lubricants',
        image: '/images/lubricants.jpg',
        description: 'Various types of high-performance lubricant oils.'
    },
    // Solar Panels and accessories
    {
        id: 'prod22',
        name: 'Solar Panels',
        category: 'Solar Panels and accessories',
        image: '/images/solar-panel.jpg',
        description: 'Energy-efficient solar panels for clean energy.'
    },
    {
        id: 'prod23',
        name: 'Inverters',
        category: 'Solar Panels and accessories',
        image: '/images/solar-inverter.jpg',
        description: 'Solar inverters for effective energy conversion.'
    },
    {
        id: 'prod24',
        name: 'Solar Floodlights',
        category: 'Solar Panels and accessories',
        image: '/images/solar-floodlight.jpg',
        description: 'Bright, eco-friendly solar-powered floodlights.'
    },
    {
        id: 'prod25',
        name: 'Lithium Battery',
        category: 'Solar Panels and accessories',
        image: '/images/lithium-battery.jpg',
        description: 'Long-lasting lithium batteries for solar setups.'
    },
    {
        id: 'prod26',
        name: 'Mounting Kits',
        category: 'Solar Panels and accessories',
        image: '/images/mounting-kit.jpg',
        description: 'Sturdy mounting kits for solar installations.'
    },
    {
        id: 'prod27',
        name: 'Protection Kits',
        category: 'Solar Panels and accessories',
        image: '/images/protection-kit.jpg',
        description: 'Protective components for solar panel systems.'
    },
    // Tools and Hardware
    {
        id: 'prod28',
        name: 'Welding Materials',
        category: 'Tools and Hardware',
        image: '/images/welding-materials.jpg',
        description: 'Reliable materials for all welding applications.'
    },
    {
        id: 'prod29',
        name: 'Painting Materials',
        category: 'Tools and Hardware',
        image: '/images/painting-materials.jpg',
        description: 'Everything you need for painting and finishing.'
    },
    {
        id: 'prod30',
        name: 'Garden Tools',
        category: 'Tools and Hardware',
        image: '/images/garden-tools.jpg',
        description: 'Essential tools for gardening and landscaping.'
    },
    {
        id: 'prod31',
        name: 'Hand Tools',
        category: 'Tools and Hardware',
        image: '/images/hand-tools.jpg',
        description: 'High-quality hand tools for every task.'
    },
    {
        id: 'prod32',
        name: 'Power Tools',
        category: 'Tools and Hardware',
        image: '/images/power-tools.jpg',
        description: 'Powerful tools for industrial and home use.'
    },
    {
        id: 'prod33',
        name: 'Industrial Tools',
        category: 'Tools and Hardware',
        image: '/images/industrial-tools.jpg',
        description: 'Heavy-duty tools for industrial applications.'
    },
    {
        id: 'prod34',
        name: 'Construction Tools',
        category: 'Tools and Hardware',
        image: '/images/construction-tools.jpg',
        description: 'All-purpose tools for construction work.'
    }
];
}),
"[project]/styles/NavBar.module.css [ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "navLink": "NavBar-module__Qc37tW__navLink",
  "navbar": "NavBar-module__Qc37tW__navbar",
});
}),
"[project]/components/navbar.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>NavBar
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$NavBar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/NavBar.module.css [ssr] (css module)");
;
;
;
function NavBar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$NavBar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navbar,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                legacyBehavior: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$NavBar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navLink,
                    children: "Home"
                }, void 0, false, {
                    fileName: "[project]/components/navbar.js",
                    lineNumber: 7,
                    columnNumber: 37
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navbar.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/about-us",
                legacyBehavior: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$NavBar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navLink,
                    children: "About us"
                }, void 0, false, {
                    fileName: "[project]/components/navbar.js",
                    lineNumber: 8,
                    columnNumber: 45
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navbar.js",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/services",
                legacyBehavior: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$NavBar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navLink,
                    children: "Services"
                }, void 0, false, {
                    fileName: "[project]/components/navbar.js",
                    lineNumber: 9,
                    columnNumber: 45
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navbar.js",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/contact-us",
                legacyBehavior: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$NavBar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navLink,
                    children: "Contact Us"
                }, void 0, false, {
                    fileName: "[project]/components/navbar.js",
                    lineNumber: 10,
                    columnNumber: 47
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navbar.js",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/navbar.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/styles/footer.module.css [ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "footer": "footer-module__WlMSAW__footer",
  "footerContent": "footer-module__WlMSAW__footerContent",
  "footerLinks": "footer-module__WlMSAW__footerLinks",
  "footerText": "footer-module__WlMSAW__footerText",
});
}),
"[project]/components/footer.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Footer
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/footer.module.css [ssr] (css module)");
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerContent,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerText,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            children: "NextGen Construction"
                        }, void 0, false, {
                            fileName: "[project]/components/footer.js",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            children: "Your trusted partner in quality construction materials and services."
                        }, void 0, false, {
                            fileName: "[project]/components/footer.js",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.js",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLinks,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            children: "Quick Links"
                        }, void 0, false, {
                            fileName: "[project]/components/footer.js",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "/",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.js",
                                        lineNumber: 16,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.js",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "/about",
                                        children: "About Us"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.js",
                                        lineNumber: 17,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.js",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "/services",
                                        children: "Services"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.js",
                                        lineNumber: 18,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.js",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "/contact",
                                        children: "Contact Us"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.js",
                                        lineNumber: 19,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.js",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "/all-products",
                                        children: "All Products"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.js",
                                        lineNumber: 20,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.js",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.js",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.js",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerContact,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            children: "Contact Us"
                        }, void 0, false, {
                            fileName: "[project]/components/footer.js",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            children: [
                                "Email: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: "mailto:"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.js",
                                    lineNumber: 25,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.js",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            children: [
                                "Phone: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: "tel:",
                                    children: "+123 456 789"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.js",
                                    lineNumber: 26,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.js",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            children: "Address: 123 Construction St, City, Country"
                        }, void 0, false, {
                            fileName: "[project]/components/footer.js",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.js",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].copy,
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " NextGen Construction. All rights reserved."
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.js",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/logo.png",
                        alt: "NextGen Logo",
                        width: 50,
                        height: 50
                    }, void 0, false, {
                        fileName: "[project]/components/footer.js",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/footer.js",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "styles.privacyPolicy",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            href: "/privacy-policy",
                            children: "Privacy Policy"
                        }, void 0, false, {
                            fileName: "[project]/components/footer.js",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        " | ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            href: "/terms-of-service",
                            children: "Terms of Service"
                        }, void 0, false, {
                            fileName: "[project]/components/footer.js",
                            lineNumber: 34,
                            columnNumber: 58
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.js",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/footer.js",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/footer.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/pages/all-products.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>AllProducts
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/products.js [ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../styles/all-priducts.module.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navbar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.js [ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function AllProducts() {
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('All');
    // Get unique categories for filter
    const categories = [
        'All',
        ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["products"].map((p)=>p.category))
    ];
    // Filter logic
    const filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["products"].filter((p)=>(selectedCategory === 'All' || p.category === selectedCategory) && (p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.category.toLowerCase().includes(searchTerm.toLowerCase())));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: styles.outerWrapper,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/pages/all-products.js",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: styles.pageWrapper,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                            children: "All Products"
                        }, void 0, false, {
                            fileName: "[project]/pages/all-products.js",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            children: "Explore our wide range of products across various categories."
                        }, void 0, false, {
                            fileName: "[project]/pages/all-products.js",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: styles.mainContent,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("aside", {
                                    className: styles.sidebar,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: styles.filterBlock,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                children: "Filter Products"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/all-products.js",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        htmlFor: "category",
                                                        children: "Category:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/all-products.js",
                                                        lineNumber: 38,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                        id: "category",
                                                        value: selectedCategory,
                                                        onChange: (e)=>setSelectedCategory(e.target.value),
                                                        className: styles.selectInput,
                                                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: cat,
                                                                children: cat
                                                            }, cat, false, {
                                                                fileName: "[project]/pages/all-products.js",
                                                                lineNumber: 46,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/all-products.js",
                                                        lineNumber: 39,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/all-products.js",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: styles.searchWrapper,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        htmlFor: "search",
                                                        children: "Search:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/all-products.js",
                                                        lineNumber: 53,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        id: "search",
                                                        type: "search",
                                                        placeholder: "Search by product or category",
                                                        value: searchTerm,
                                                        onChange: (e)=>setSearchTerm(e.target.value),
                                                        className: styles.searchInput
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/all-products.js",
                                                        lineNumber: 54,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/all-products.js",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/all-products.js",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pages/all-products.js",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: styles.productGrid,
                                    children: filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: styles.productCard,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: styles.imageWrapper,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: product.image,
                                                        alt: product.name,
                                                        width: 250,
                                                        height: 300,
                                                        objectFit: "fit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/all-products.js",
                                                        lineNumber: 70,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/all-products.js",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                    children: product.name
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/all-products.js",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: styles.category,
                                                    children: product.category
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/all-products.js",
                                                    lineNumber: 79,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    children: product.description
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/all-products.js",
                                                    lineNumber: 80,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    href: `https://wa.me/yourphonenumber?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}`,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: styles.whatsappButton,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            display: "inline-flex",
                                                            alignItems: "center"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "20",
                                                                height: "20",
                                                                viewBox: "0 0 32 32",
                                                                fill: "currentColor",
                                                                style: {
                                                                    marginRight: "8px"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                    d: "M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.1L4 29l7.18-2.32C13.1 27.13 14.53 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.32 0-2.61-.26-3.81-.76l-.27-.11-4.27 1.38 1.4-4.14-.18-.28C7.26 18.61 7 17.32 7 16c0-5.06 4.13-9.18 9.18-9.18S25.36 10.94 25.36 16 21.23 25.18 16 25.18zm5.03-6.47c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.26-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.54.13-.13.29-.34.43-.51.14-.17.18-.29.27-.48.09-.19.05-.36-.02-.5-.07-.13-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.92 4.22.69.27 1.23.43 1.65.55.69.22 1.32.19 1.81.12.55-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/all-products.js",
                                                                    lineNumber: 96,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/all-products.js",
                                                                lineNumber: 88,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Contact on WhatsApp"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/all-products.js",
                                                        lineNumber: 87,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/all-products.js",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, product.id, true, {
                                            fileName: "[project]/pages/all-products.js",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/pages/all-products.js",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/all-products.js",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/all-products.js",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/pages/all-products.js",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pages/all-products.js",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__7e1675f4._.js.map