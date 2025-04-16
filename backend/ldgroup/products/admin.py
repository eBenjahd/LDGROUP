from django.contrib import admin
from products.models import Product
from products.models import Payment
from products.models import Order
from products.models import OrderItem
from products.models import Inventory
from products.models import Category
from products.models import SpecialProduct

# Register your models here.
admin.site.register(Product)
admin.site.register(Payment)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Inventory)
admin.site.register(Category)
admin.site.register(SpecialProduct)
