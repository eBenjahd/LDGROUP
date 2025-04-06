from django.db import models

class Order(models.Model):

    STATUS_CHOICES = {
        'pending': 'Pending',
        'paid': 'Paid',
        'canceled': 'Canceled',
        'shipped': 'Shipped',
        'delivered': 'Delivered',
    }

    '''
    Model representing an order.
    '''
    created_at = models.DateTimeField(auto_now_add=True)
    customer_name = models.CharField(max_length=255)
    customer_email = models.EmailField()
    status = models.CharField(
        max_length=20, 
        default="pending",
        choices=STATUS_CHOICES
        )  # pending, paid, canceled, etc.

    def __str__(self):
        return f"Order #{self.id} - {self.customer_name}"