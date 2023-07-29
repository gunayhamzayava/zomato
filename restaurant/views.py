from rest_framework import generics
from .models import RestaurantPlace
from .serializers import RestaurantSerializer

class RestaurantListCreateView(generics.ListCreateAPIView):
    queryset = RestaurantPlace.objects.all()
    serializer_class = RestaurantSerializer

class RestaurantRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = RestaurantPlace.objects.all()
    serializer_class = RestaurantSerializer


from django.http import JsonResponse

def get_delivery_data(request):
    data = {
        "food": [
            {
            "id": 1,
            "yemek_novu": "Pizza",
            "image": "/pizza.avif"
            },
            {
            "id": 2,
            "yemek_novu": "Burger",
            "image": "/burger.avif"
            },
            {
            "id": 3,
            "yemek_novu": "Toyuq",
            "image": "/toyuq.webp"
            },
            {
            "id": 4,
            "yemek_novu": "Rollar",
            "image": "/rolls.avif"
            },
            {
            "id": 5,
            "yemek_novu": "Tali",
            "image": "/thali.avif"
            },
            {
            "id": 6,
            "yemek_novu": "Biryani",
            "image": "/biryani.avif"
            },
            {
            "id": 7,
            "yemek_novu": "Tort",
            "image": "/cake.avif"
            },
            {
            "id": 8,
            "yemek_novu": "Şimali Hindistan",
            "image": "/indian.avif"
            },
            {
            "id": 9,
            "yemek_novu": "Paneer",
            "image": "/paneer.avif"
            },
            {
            "id": 10,
            "yemek_novu": "Dosa",
            "image": "/dosa.avif"
            },
            {
            "id": 11,
            "yemek_novu": "Paratha",
            "image": "/paratha.avif"
            },
            {
            "id": 12,
            "yemek_novu": "Noodle",
            "image": "/noodles.avif"
            }
  ],
    }
    return JsonResponse(data)


from rest_framework import generics
from .models import Food
from .serializers import FoodSerializer

class FoodListAPIView(generics.ListAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer

from .models import Variety
from .serializers import FirstOrderSerializer

class FirstOrderListCreateView(generics.ListCreateAPIView):
    queryset = Variety.objects.all()
    serializer_class = FirstOrderSerializer


class FirstOrderDeleteView(generics.DestroyAPIView):
    queryset = Variety.objects.all()
    serializer_class = FirstOrderSerializer