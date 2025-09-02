/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { ProductListPage } from "@pos_self_order/app/pages/product_list_page/product_list_page";
import { TimeoutPopup } from "@pos_self_order/app/components/timeout_popup/timeout_popup";

// Utility function (shared)
function removeMarvifyOverlay() {
    const oldOverlay = document.querySelector(".o_marvify_overlay");
    if (oldOverlay) oldOverlay.remove();
}

// -----------------------------
// Patch: ProductListPage
// -----------------------------
patch(ProductListPage.prototype, {
    setup() {
        super.setup(...arguments);
    },

    getMarvifyModelId(product) {
        const firstVariant = product.product_variant_ids?.[0];
        return firstVariant?.marvify_model_id;
    },

    showMarvifyViewer(ev, marvify_model_id) {
        ev.stopPropagation();
        if (!marvify_model_id) return;

        // remove old overlay if already exists
        removeMarvifyOverlay();

        // create overlay
        const overlay = document.createElement("div");
        overlay.classList.add("o_marvify_overlay");

        // create modal
        const modal = document.createElement("div");
        modal.classList.add("o_marvify_modal");
        modal.innerHTML = `
            <button class="o_marvify_close">&times;</button>
            <iframe id="${marvify_model_id}" src="https://v.marvify.io/?m=${marvify_model_id}"></iframe>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // close button
        modal.querySelector(".o_marvify_close").addEventListener("click", () => overlay.remove());

        // close on outside click
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) overlay.remove();
        });
    },
});

// -----------------------------
// Patch: TimeoutPopup
// -----------------------------
patch(TimeoutPopup.prototype, {
    setup() {
        super.setup(...arguments);

        const originalOnTimeout = this.props.onTimeout;
        this.props.onTimeout = () => {
            removeMarvifyOverlay();
            if (originalOnTimeout) {
                originalOnTimeout();
            }
        };
    },
});

