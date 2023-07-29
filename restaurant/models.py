from django.db import models


class RestaurantPlace(models.Model):
    name = models.CharField(max_length=100)
    restaurant_image = models.ImageField(upload_to='restaurant_images/')
    cuisine = models.CharField(max_length=100)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    cost = models.DecimalField(max_digits=6, decimal_places=2)
    discount_price = models.DecimalField(
        max_digits=6, decimal_places=2, null=True, blank=True)
    minute = models.PositiveIntegerField()
    meals = models.CharField(max_length=200)
    context = models.CharField(max_length=600)

    def __str__(self):
        return self.name


class Food(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.URLField()


class Variety(models.Model):
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=300)

    def __str__(self):
        return self.name
