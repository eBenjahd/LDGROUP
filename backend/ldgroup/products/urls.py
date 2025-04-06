from django.urls import path
from .views import ProductList, ProductDetail  # Ya no es necesario importar views

urlpatterns = [
    path('', ProductList.as_view(), name='product-list'),  # Acceso a todos los productos
    path('<int:pk>/', ProductDetail.as_view(), name='product-detail'),  # Acceso a un producto específico por ID
]