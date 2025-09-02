[![License: LGPL-3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0.html)

# POS Marvify Photo-3D Viewer

This Odoo module integrates the **Marvify Photo-3D Viewer** into the **POS Self Order kiosk**.  
It adds a play button overlay on product images that opens an iframe with an interactive Photo-3D model.

---

## Table of contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Bug Tracker](#bug-tracker)
- [Credits](#credits)
- [License](#license)

---

## Features

- Adds a **play button** on products with a linked Marvify model.
- Opens an **overlay with iframe** for the Marvify Photo-3D viewer.
- Overlay can be closed by:
  - Clicking the close button
  - Clicking outside the iframe
  - **Kiosk timeout** (overlay auto-closes when the kiosk resets)
- Works seamlessly with Odoo **POS Self Order** module.

---

## Requirements

- Odoo **18.5+**
- Installed modules:
  - `pos_self_order`
  - `product`
- A valid **Marvify model ID** on your product variant.

---

## Installation

1. Copy this module into your Odoo `addons` folder:
   ```bash
   /odoo/addons/pos_marvify
   ```
2. Install **POS Marvify 3D Viewer** from the Apps menu.

---

## Configuration

1. Go to **Products**, **Point of Sale** tab.
2. Assign a **Marvify Model ID** to each product variant that should display the Marvify Photo-3D viewer.

---

## Usage

1. Open the **POS Self Order kiosk**.
2. Products with a model ID will show a **play button** overlay on their image.
3. Click the play button to open the Marvify Photo-3D viewer in an overlay.
4. Close the viewer by:
   - Clicking the `×` button
   - Clicking outside the modal
   - Letting the **kiosk timeout** reset the session (overlay closes automatically).

---

## Screenshots

### Product list with play button overlay
![Product list with play button](./static/description/screenshot_play_button.png)

### Marvify Photo-3D Viewer overlay
![Photo-3D viewer overlay open](./static/description/screenshot_viewer_overlay.png)

---

## Bug Tracker

Bugs are tracked on [GitHub Issues](https://github.com/Marvify/issues).  
If you encounter problems, please check if the issue has already been reported.  
If not, create a new issue with detailed steps to reproduce the problem.

---

## Credits

### Authors
- Marvify AB

### Maintainers
This module is maintained by **Marvify AB**.

---

## License

This module is licensed under the **LGPL-3** license.
See the full text here: [GNU Lesser General Public License v3.0](https://www.gnu.org/licenses/lgpl-3.0.html).

