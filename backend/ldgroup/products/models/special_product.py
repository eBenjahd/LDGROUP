from django.db import models
from .product import Product

class SpecialProduct(models.Model):

    product = models.OneToOneField(Product, on_delete=models.CASCADE, related_name="special_info")
    is_especial = models.BooleanField(default=False, verbose_name="Is Special")
    is_featured = models.BooleanField(default=False, verbose_name="Is Featured")

    def __str__(self):
        return f"{self.product.name} - Special Info"