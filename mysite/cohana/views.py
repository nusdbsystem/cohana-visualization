from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
import json
import os
from .utils.correlation_details import correlation_details
from .utils.correlation_overview import correlation_overview

# Create your views here.
from .models import MonthlyWeatherByCity

from utils import *

def test(request):
    return render(request, 'cohana/index.html') 

def dashboard(request):
    # deal with continent chart
    with open('cohana/data/continent.dat') as data_file:    
        rawData = json.load(data_file)
    rawResult = rawData[u'result']
    i = 0
    continentLegend = []
    continentData = []
    for r in rawResult:
        continentLegend.append(r[u'cohort'])
        pair = {'value':r[u'measure'],'name':r[u'cohort']}
        continentData.append(pair)

    # deal with dau chart
    file = open('cohana/data/dau.dat')
    dauXLabel=[]
    dauData=[]
    for line in file:
        l = line.split()
        dauXLabel.append(l[0])
        dauData.append(l[1])
    file.close()

    # deal with map
    mapData=[]
    with open('cohana/data/country.dat') as data_file:
        rawData = json.load(data_file)
    rawResult = rawData[u'result']
    for r in rawResult:
        pair = {'name':r[u'cohort'],'value':r[u'measure']}
        mapData.append(pair)
        
    # deal with role chart
    with open('cohana/data/role.dat') as data_file:    
        rawData = json.load(data_file)
    rawResult = rawData[u'result']
    i = 0
    roleLegend = []
    roleData = []
    for r in rawResult:
        roleLegend.append(r[u'cohort'])
        pair = {'value':r[u'measure'],'name':r[u'cohort']}
        roleData.append(pair)
       
    #print roleLegend 
    #print mapData 
    return render(request, 'cohana/dashboard.html',{'continentLegend':
                json.dumps(continentLegend),
                'continentData':json.dumps(continentData),
                'dauXLabel':json.dumps(dauXLabel),
                'dauData':json.dumps(dauData),
                'mapData':json.dumps(mapData),
                'roleLegend':json.dumps(roleLegend),
                'roleData':json.dumps(roleData)
                }) 

def data_details(request):
    # deal with event chart
    file = open('cohana/data/event.dat')
    eventLegend = []
    eventData = []
    for line in file:
        l = line.split()
        eventLegend.append(l[0])
        pair = {'value':l[1], 'name':l[0]}
        eventData.append(pair)
    file.close()    

    # deal with sessionAvg chart
    file = open('cohana/data/sessionAverage.dat')
    sessionAvgXLabel=[]
    sessionAvgData=[]
    for line in file:
        l = line.split()
        sessionAvgXLabel.append(l[0])
        sessionAvgData.append(l[1])
    file.close()
    
    # deal with sessionSca chart
    rawData = {}
    with open('cohana/data/sessionLength.json') as data_file:
        rawData = json.load(data_file)
    sessionScaLegend = rawData['legend'] 
    sessionScaData = rawData['data']

    with open('cohana/data/eventByDay.json') as data_file:
        rawData = json.load(data_file)
    eventStackXLabel = rawData['label'] 
    eventStackLegend = rawData['legend'] 
    eventStackData = rawData['data']

    return render(request, 'cohana/data_details.html',
            {
                'eventData':json.dumps(eventData),
                'eventLegend':json.dumps(eventLegend),
                'sessionAvgXLabel':json.dumps(sessionAvgXLabel),
                'sessionAvgData':json.dumps(sessionAvgData),
                'sessionScaLegend':json.dumps(sessionScaLegend),
                'sessionScaData':json.dumps(sessionScaData),
                'eventStackXLabel':json.dumps(eventStackXLabel),
                'eventStackLegend':json.dumps(eventStackLegend),
                'eventStackData':json.dumps(eventStackData)
            })

def user_details(request):
    return render(request, 'cohana/user_details.html')

def retention_analysis(request):
    return render(request,
            'cohana/correlation.html') 

def innerchart(request):
    row = int(request.GET.get('row', 0));
    col = int(request.GET.get('col', 0));
    return JsonResponse(correlation_details.correlation_details(row, col));

def outerchart(request):
    return JsonResponse(correlation_overview.correlation_overview());
