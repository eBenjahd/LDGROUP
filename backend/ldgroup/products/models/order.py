from django.db import models

class Order(models.Model):

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('paid', 'Paid'),
        ('canceled', 'Canceled'),
        ('shipped', 'Shipped'),
        ('delivered', 'Delivered'),
    ]

    '''
    Model representing an order.
    '''
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    customer_name = models.CharField(max_length=255, verbose_name="Nombre del cliente")
    customer_email = models.EmailField(verbose_name="Correo electrónico")
    status = models.CharField(
        max_length=20, 
        default="pending",
        choices=STATUS_CHOICES,
        verbose_name="Estado del pedido",
        )  # pending, paid, canceled, etc.
    shipping_address = models.CharField(max_length = 255, default = "pending", verbose_name="Dirección de envío", blank = True)
    phone_number = models.CharField(max_length = 20, verbose_name="Número de teléfono", blank = True)
    province = models.CharField(max_length = 100, verbose_name="Provincia", blank = True)
    city = models.CharField(max_length = 100, verbose_name="Ciudad", blank = True)
    district = models.CharField(max_length = 100, verbose_name="Distrito", blank = True)
    postal_code = models.CharField(max_length = 20, verbose_name="Código postal", blank = True)
    dni = models.CharField(max_length = 20, verbose_name="DNI", blank = True)

    def __str__(self):
        return f"Order #{self.id} - {self.customer_name}"