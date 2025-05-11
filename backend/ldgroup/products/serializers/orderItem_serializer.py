from rest_framework import serializers
from products.models import OrderItem

class OrderItemSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = OrderItem
        fields = ['product', 'quantity']
