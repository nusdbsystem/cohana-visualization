from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from .calc import calc

# Create your views here.
from .models import MonthlyWeatherByCity

from utils import *

def test(request):
    return render(request, 'cohana/index.html') 

def dashboard(request):
    return render(request, 'cohana/correlation.html') 

def innerchart(request):
    row = int(request.GET.get('row', 0));
    col = int(request.GET.get('col', 0));
    return JsonResponse(calc(row, col));
