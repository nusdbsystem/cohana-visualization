from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from .models import MonthlyWeatherByCity

from utils import *

#def weather_chart_view(request):
#    #Step 1: Create a DataPool with the data we want to retrieve.
#    weatherdata = \
#            DataPool(
#                    series=
#                    [{'options': {
#                        'source': MonthlyWeatherByCity.objects.all()},
#                        'terms': [
#                            'month',
#                            'houston_temp',
#                            'boston_temp']}
#                        ])
#    #Step 2: Create the Chart object
#    cht = Chart(
#            datasource = weatherdata,
#            series_options =
#            [{'options':{
#                'type': 'line',
#                'stacking': False},
#                'terms':{
#                    'month': [
#                        'boston_temp',
#                        'houston_temp']
#                    }}],
#                chart_options =
#                {'title': {
#                    'text': 'Weather Data of Boston and Houston'},
#                    'xAxis': {
#                        'title': {
#                            'text': 'Month number'}}})
#
#    #Step 1: Create a DataPool with the data we want to retrieve.
#    weatherdata1 = \
#            DataPool(
#                    series=
#                    [{'options': {
#                        'source': MonthlyWeatherByCity.objects.all()},
#                        'terms': [
#                            'month',
#                            'new_york_temp',
#                            'san_francisco_temp']}
#                        ])
#
#    #Step 2: Create the Chart object
#    cht1 = Chart(
#            datasource = weatherdata1,
#            series_options =
#            [{'options':{
#                'type': 'line',
#                'stacking': False},
#                'terms':{
#                    'month': [
#                        'new_york_temp',
#                        'san_francisco_temp']
#                    }}],
#                chart_options =
#                {'title': {
#                    'text': 'Weather Data of NY and SF'},
#                    'xAxis': {
#                        'title': {
#                            'text': 'Month number'}}})
#
#    #Step 3: Send the chart object to the template.
#    #return render_to_response({'weatherchart': cht})
#    return render(request, 'cohana/index.html', 
#            {
#                'weatherchart': [cht, cht1],
#                })
#
#def user_activities(request):
#    userId = '123'
#    query = {
#    'dataSource' : 'sogamo',
#    'appKey' : 'fd1ec667-75a4-415d-a250-8fbb71be7cab',
#    'birthSequence' : { 
#        'birthEvents' : [{
#            'minTrigger' : 1,
#            'maxTrigger' : -1,
#            'eventSelection' : [{
#                'fieldValue' : {
#                    'type' : 'AbsoluteValue',
#                    'values' : [ 'fight' ],
#                    'baseField' : 'null',
#                    'baseEvent' : -1
#                },
#                'cubeField' : 'event',
#                'filterType' : 'Set'
#            }],
#            'timeWindow' : {
#                'length' : 7,
#                'slice' : 'false',
#                'unit' : 'DAY'
#            },
#            'cohortFields' : [{
#                'field' : 'activeness',
#                'numLevel' : 20,
#                'minLevel' : 0,
#                'logScale' : 'false',
#                'scale' : 100
#            }]
#        }]
#    },
#    'ageField' : {
#        'field' : 'DAY',
#        'ageInterval' : 1
#    },
#    'measure' : 'UserActivity',
#    'userId' : userId 
#    }
#    ret = pass_request(query)
#    data1 = ret['result']['1']
#    data0 = ret['result']['0']
#    return render(request, 'cohana/user_activities.html', {'user_details':zip(data1,data0), 'user_id': userId}) 
#
#def cohort_management(request):
#    with open('/home/zhongle/q1.json') as data_file:    
#            query = json.load(data_file)
#    ret = pass_request(query)
#    return render(request, 'cohana/cohort_management.html') 
#
#def cohort_analysis(request):
#    return render(request, 'cohana/cohort_analysis.html') 
#
#def sample_analysis(request):
#    return render(request, 'cohana/sample_analysis.html') 

def test(request):
    return render(request, 'cohana/index.html') 
def dashboard(request):
    return render(request, 'cohana/heatmap.html') 
