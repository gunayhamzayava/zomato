from django.urls import path
from .views import RestaurantListCreateView, RestaurantRetrieveUpdateDestroyView

urlpatterns = [
    path('restaurants/', RestaurantListCreateView.as_view(), name='restaurant-list-create'),
    path('restaurants/<int:pk>/', RestaurantRetrieveUpdateDestroyView.as_view(), name='restaurant-retrieve-update-destroy'),
]
