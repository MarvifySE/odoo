from odoo import models, fields, api

class ProductTemplate(models.Model):
    _inherit = "product.template"

    marvify_model_id = fields.Char(
        string="Marvify Model ID",
        store=True,
        help="Enter the Marvify Model ID to show this product in 3D!"
    )


class ProductProduct(models.Model):
    _inherit = "product.product"

    marvify_model_id = fields.Char(string="Marvify Model ID",
        related="product_tmpl_id.marvify_model_id",
        store=True
    )

    @api.model
    def _load_pos_data_fields(self, config_id):
        fields = super()._load_pos_data_fields(config_id)
        return fields + ['marvify_model_id']

