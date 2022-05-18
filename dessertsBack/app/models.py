from django.db import models
from django.contrib import admin
from django.core.validators import MinValueValidator

# Create your models here.

class Tag(models.Model):
    value = models.TextField(max_length=100)

    def __str__(self):
        return self.value

class Dessert(models.Model):
    name = models.TextField(max_length=100)
    description = models.TextField(max_length=1000, blank=True)
    picture = models.ImageField(upload_to ='uploads/desserts-pics/', max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2, validators=[MinValueValidator(1)])
    tags = models.ManyToManyField(Tag, related_name="desserts")


    def __str__(self):
        return self.name + " ($" + str(self.price) +")"

class Order(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    desserts = models.ManyToManyField(Dessert, related_name="orders")
    created_at = models.DateTimeField(auto_now_add=True)
    comments = models.TextField(max_length=500)

    def save(self, *args, **kwargs):
        self.amount = 0
        for item in self.desserts:
            self.amount = self.amount + item.price
        super(Order, self).save(*args, **kwargs)

    def __str__(self):
        return self.created_at + " $"+self.amount

admin.site.register(Tag)
admin.site.register(Dessert)
admin.site.register(Order)