from rest_framework import serializers
from products.models import Payment

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        
        '''
        Serializer for the Payment model.
        '''

        model = Payment
        fields = ['id', 'order', 'method', 'amount', 'paid_at', 'payment_reference']
        read_only_fields = ['amount', 'paid_at']