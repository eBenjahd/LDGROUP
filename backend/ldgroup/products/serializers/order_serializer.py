from rest_framework import serializers
from products.models import Order
from products.serializers import OrderItemSerializer
from products.models import OrderItem


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True) # Nested serializer for order items

    class Meta:
        model = Order
        fields = ['id', 'customer_name', 'customer_email', 'shipping_address', 
                  'phone_number', 'province', 'city', 'district', 'postal_code', 
                  'dni', 'status', 'created_at', 'items']
        read_only_fields = ['id', 'status', 'created_at']

    def create(self, validated_data):
        items_data = validated_data.pop('items')
        order = Order.objects.create(**validated_data)
        for item_data in items_data:
            OrderItem.objects.create(order=order, **item_data)
        return order