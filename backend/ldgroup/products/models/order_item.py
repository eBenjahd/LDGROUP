from django.db import models
from .order import Order
from .product import Product
from .inventory import Inventory
from django.core.exceptions import ValidationError

class OrderItem(models.Model):
    order = models.ForeignKey('Order', on_delete=models.CASCADE, related_name="items")
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price_at_time = models.DecimalField(max_digits=10, decimal_places=2,default=0)

    def save(self, *args, **kwargs):
        inventory = self.product.inventory.first()

        # Si la cantidad es 0, elimina el OrderItem
        if self.quantity == 0:
            self.delete()
            return

        # Recuperamos el estado anterior (si ya existía)
        if self.pk:
            previous = OrderItem.objects.get(pk=self.pk)
            quantity_difference = self.quantity - previous.quantity
        else:
            previous = None
            quantity_difference = self.quantity

        # Validación de stock
        if inventory and quantity_difference > inventory.quantity:
            raise ValidationError(f"No hay suficiente stock. Solo quedan {inventory.quantity} unidades.")

        # Recalcula el precio SIEMPRE
        self.price_at_time = self.product.price * self.quantity

        super().save(*args, **kwargs)

        # Actualizamos inventario
        if inventory:
            if previous:  # Ya existía, actualizamos diferencia
                inventory.quantity -= quantity_difference
            else:  # Nuevo item
                inventory.quantity -= self.quantity
            inventory.save()
    def delete(self, *args, **kwargs):
        # Revertir cantidad de inventario cuando el item es eliminado
        inventory = self.product.inventory.first()
        if inventory:
            inventory.quantity += self.quantity  # Aumentamos el stock
            inventory.save()

        super().delete(*args, **kwargs)

    def __str__(self):
        return f"{self.quantity} x {self.product.name} (Order #{self.order.id})"