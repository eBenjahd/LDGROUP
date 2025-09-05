# APPS

# from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ValidationError

# MODELS
from .models import Product
from .models import Inventory
from .models import OrderItem

# SERIALIZERS
from .serializers import OrderItemSerializer
from .serializers import ProductSerializer
from .serializers import InventorySerializer
from .serializers import OrderSerializer

class ProductList(APIView):
    def get(self, request, format=None):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ProductDetail(APIView):  # Nueva vista para manejar productos por ID
    def get(self, request, pk, format=None):
        try:
            product = Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ProductSerializer(product)
        return Response(serializer.data)
    

@api_view(['PUT'])
def update_inventory(request, pk):
    try:
        inventory = Inventory.objects.get(pk=pk)
    except Inventory.DoesNotExist:
        return Response({"error": "Inventario no encontrado"}, status=status.HTTP_404_NOT_FOUND)

    serializer = InventorySerializer(inventory, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_inventory(request):
    product_id = request.GET.get('product')  # <--- buscamos por id de producto
    if not product_id:
        return Response({"error": "Falta el parámetro product"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        inventory = Inventory.objects.get(product_id=product_id)
    except Inventory.DoesNotExist:
        return Response({"quantity": 0, "product": product_id})  # devolver 0 si no hay inventario

    serializer = InventorySerializer(inventory)
    return Response(serializer.data)

@api_view(['PATCH'])
def update_order_item(request, pk):
    try: 
        order_item = OrderItem.objects.get(pk=pk)
    except OrderItem.DoesNotExist:
        return Response({"error": "Order item no encontrado"}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = OrderItemSerializer(order_item, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    

@api_view(['POST'])
def create_order(request):

    serializer = OrderSerializer(data=request.data)
    if serializer.is_valid():
        try:
            order = serializer.save()  # Guarda la orden
            return Response(OrderSerializer(order).data, status=status.HTTP_201_CREATED)
        
        except ValidationError as ve:
            # Aquí devolvemos el error capturado por la validación
            return Response({"error": str(ve)}, status=status.HTTP_400_BAD_REQUEST)
    
    # Si el serializer no es válido
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)