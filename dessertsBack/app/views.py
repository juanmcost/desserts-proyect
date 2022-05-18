from django.shortcuts import render
from django.http import HttpResponse

from .models import Dessert


# Create your views here.

def DessertsView(request):
    desserts = Dessert.objects.all()
    return HttpResponse(desserts)