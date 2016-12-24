import requests
import json

def pass_request(query):
    headers = { \
            'Connection':'keep-alive', \
            'Cookie':'', \
            'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36', \
            'Content-Type':'application/json', \
            'Accept' :'*/*'
            }
    r = requests.post('http://epic.d1.comp.nus.edu.sg:9998/v1/cohort/analysis', data =
            json.dumps(query), headers = headers)
    return json.loads(r.text)

def get_plotdata(result):
    rawResult = result[u'result']
    i = 0
    legend = []
    data = []
    for r in rawResult:
        legend.append(r[u'cohort'])
        pair = {'value':r[u'measure'],'name':r[u'cohort']}
        data.append(pair)
    ret = {'Legend': legend,'Data': data}
    #print ret
    return ret


