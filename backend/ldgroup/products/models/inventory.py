from django.db import models
from .product import Product

class Inventory(models.Model):

    product = models.ForeignKey('Product', on_delete=models.CASCADE, related_name='inventory', verbose_name="Product")
    quantity = models.PositiveIntegerField(verbose_name="Quantity")

    def __str__(self):
        return f"{self.product.name} - {self.quantity} disponibles"
    
    def reduce(self):
        pass