{
    "name": "POS Marvify Photo-3D Viewer",
    "version": "18.5.1.0.0",
    "summary": "Display Marvify Photo-3D viewer in POS Self Order",
    "category": "Point of Sale",
    "author": "Marvify AB",
    "website": "https://www.marvify.com",
    "license": "LGPL-3",
    "depends": ["pos_self_order", "product"],
    "icon": "pos_marvify/static/description/icon.png",
    "data": [
        "views/product_template_views.xml",
    ],
    "assets": {
        "pos_self_order.assets": [
            "pos_marvify/static/src/app/pages/pos_marvify.js",
            "pos_marvify/static/src/app/pages/pos_marvify.scss",
            "pos_marvify/static/src/app/pages/pos_marvify.xml",
        ],
    },
    "installable": True,
    "application": False,
}

