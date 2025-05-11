from rest_framework import serializers
from products.models import Inventory

class InventorySerializer(serializers.ModelSerializer):
    """
    Serializer for the Inventory model.
    """
    class Meta:
        model = Inventory
        fields = '__all__'
        read_only_fields = ['id', 'product']