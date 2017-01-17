from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^$', views.test, name='main'),
	url(r'index$', views.test, name='index'),
	url(r'^dashboard$', views.dashboard, name='dashboard'),
	url(r'^dataDetails$', views.data_details, name='dataDetails'),
	url(r'^userDetails$', views.user_details, name='userDetails'),
	url(r'^sample/retention$', views.retention_analysis, name='retention'),
	url(r'profiling$', views.profiling, name='profiling'),
	url(r'^sample/loyalty$', views.loyal_usr_detection, name='loyalty'),
	url(r'^sample/loyaltyquery$', views.get_loyal_retention, name='loyaltyq'),
	url(r'^sample/ageby$', views.ageby_view, name='ageby'),
	url(r'^sample/timeline$', views.timeline_view, name='timeline'),
	url(r'innerchart$', views.innerchart, name='innerchart'),
	url(r'outerchart$', views.outerchart, name='outerchart'),
]
