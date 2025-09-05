from django.urls import path
from .views import ProductList, ProductDetail, update_inventory, get_inventory, update_order_item, create_order  # Ya no es necesario importar views

urlpatterns = [
    path('', ProductList.as_view(), name='product-list'),  # Acceso a todos los productos
    path('<int:pk>/', ProductDetail.as_view(), name='product-detail'),  # Acceso a un producto específico por ID
    path('inventory/', get_inventory, name='get-inventory'),
    path('inventory/<int:pk>/update/',update_inventory, name='update-inventory'),  
    path('order-items/<int:pk>/update/', update_order_item, name='update-order-item'),  # Actualizar un OrderItem específico
    path('orders/create/', create_order, name='create-order'),


]