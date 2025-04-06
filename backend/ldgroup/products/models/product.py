from django.db import models
from .category import Category

class Product(models.Model):
    """
    Model representing a product.
    """
    name = models.CharField(max_length=255,verbose_name="Product Name")
    description = models.TextField(verbose_name="Product Description")
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Product Price")
    category = models.ForeignKey('Category', on_delete=models.CASCADE, related_name='products', verbose_name="Product Category",default=1)
    image = models.ImageField(upload_to='products/', null=True, blank=True, verbose_name="Product Image")
    is_active = models.BooleanField(default=True, verbose_name="Is Active")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Created At")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Updated At")

    def __str__(self):
        return self.name