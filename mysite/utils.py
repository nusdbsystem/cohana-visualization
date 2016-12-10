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
    r = requests.post('http://logbase.d1.comp.nus.edu.sg:9998/v1/cohort', data =
            json.dumps(query), headers = headers)
    return json.loads(r.text)

