from django.db import models
from .order import Order

class Payment(models.Model):
    order = models.OneToOneField('Order', on_delete=models.CASCADE)
    method = models.CharField(max_length=50, default='Mercado Pago')  # Usamos 'Mercado Pago' como único método
    amount = models.DecimalField(max_digits=10, decimal_places=2,default=0)  # Monto total de la orden
    paid_at = models.DateTimeField(auto_now_add=True)
    payment_reference = models.CharField(max_length=255, blank=True, null=True)  # Referencia de la transacción (ID de Mercado Pago)

    def save(self, *args, **kwargs):
        # Calcular el total de la orden sumando el total de cada OrderItem (precio por cantidad)
        if not self.amount:  # Si amount no tiene valor, lo calculamos
            total = 0
            for item in self.order.items.all():  # Obtener todos los OrderItem relacionados con esta orden
                total += item.price_at_time  # Sumar el precio total de cada OrderItem
            self.amount = total  # Asignar el total calculado al campo amount
        super().save(*args, **kwargs) # Llama al método 


    def __str__(self):
        return f"Payment for Order #{self.order.id} - {self.method}"