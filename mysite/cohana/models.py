from __future__ import unicode_literals

from django.db import models

# Create your models here.
class MonthlyWeatherByCity(models.Model):
    month = models.IntegerField()
    boston_temp = models.DecimalField(max_digits=5, decimal_places=1)
    houston_temp = models.DecimalField(max_digits=5, decimal_places=1)
    new_york_temp = models.DecimalField(max_digits=5, decimal_places=1, default=12)
    san_francisco_temp = models.DecimalField(max_digits=5, decimal_places=1, default=23)
