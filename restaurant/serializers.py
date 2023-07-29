from rest_framework import serializers
from .models import RestaurantPlace

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantPlace
        fields = '__all__'

from .models import Food

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = '__all__'

from .models import Variety

class FirstOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Variety
        fields = ('id', 'name', 'image')
