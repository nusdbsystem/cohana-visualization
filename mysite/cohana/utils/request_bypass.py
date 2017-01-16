import requests
import re
import json

def pass_request(query):
    headers = { \
            'Connection':'keep-alive', \
            'Cookie':'', \
            'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36', \
            'Content-Type':'application/json', \
            'Accept' :'*/*'
            }
    r = requests.post('http://epic.d1.comp.nus.edu.sg:9998/v1/cohort/analysis',
            data = json.dumps(query), headers = headers)
    return json.loads(r.text)

def pass_create_request(query):
    headers = { \
            'Connection':'keep-alive', \
            'Cookie':'', \
            'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36', \
            'Content-Type':'application/json', \
            'Accept' :'*/*'
            }
    r = requests.post('http://epic.d1.comp.nus.edu.sg:9998/v1/cohort/manage/create', data = json.dumps(query), headers = headers)
    return json.loads(r.text)

def removeCohort(cohort):
    url = 'http://epic.d1.comp.nus.edu.sg:9998/v1/cohort/manage/remove/' + cohort
    r = requests.get(url)
    return r.status_code

def get_plotdata(result):
    rawResult = result[u'result']
    i = 0
    legend = []
    data = []
    for r in rawResult:
        name = re.findall(r"\((.+?)\)",r[u'cohort'])[0]
        legend.append(name)
        pair = {'value':r[u'measure'],'name':name}
        data.append(pair)
    ret = {'Legend': legend,'Data': data}
    #print ret
    return ret

def get_plotdata_linechart(result):
    rawResult = result[u'result']
    legend = []
    data = []
    for r in rawResult:
        pair = []
        pair.append(r[u'age'])
        pair.append(r[u'measure'])
        data.append(pair)
    ret = {'Data': data}
    return ret

