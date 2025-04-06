from django.db import models

class Category(models.Model):
    '''
    Model representing a product category.
    '''
    name = models.CharField(max_length=100, unique=True, verbose_name="Category Name")
    description = models.TextField(verbose_name="Category Description")

    def __str__(self):
        return self.name