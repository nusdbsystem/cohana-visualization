from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^$', views.test, name='main'),
	url(r'index$', views.test, name='index'),
	url(r'^dashboard$', views.dashboard, name='dashboard'),
	url(r'^sample/retention$', views.retention_analysis, name='retention'),
	url(r'innerchart$', views.innerchart, name='innerchart'),
	url(r'outerchart$', views.outerchart, name='outerchart'),
]
