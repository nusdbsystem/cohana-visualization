import math
import json

activeness_file = "cohana/data/ageby_activeness.json"
retention_file = "cohana/data/ageby_retention.json"
C_MAX_AGE = 35

def get_series():
    
    activeness = {}
    retention = {}
    with open(activeness_file) as in_file:
        data = json.load(in_file)
        for it in data["result"]:
            if it["age"] > 0 and it["age"] <= C_MAX_AGE:
                k = it["cohort"][1:-1]
                if not activeness.has_key(k):
                    activeness[k] = {}
                activeness[k][it["age"]] = it["measure"]

    with open(retention_file) as in_file:
        data = json.load(in_file)
        for it in data["result"]:
            if it["age"] > 0 and it["age"] <= C_MAX_AGE:
                k = it["cohort"][1:-1]
                if not retention.has_key(k):
                    retention[k] = {}
                retention[k][it["age"]] = it["measure"]

    ret = []
    for k in activeness:
        tmp = {}
        tmp["name"] = k
        tmp["type"] = 'line'
        data = []
        for i in range(1, C_MAX_AGE+1):
            data.append(activeness[k][i] / retention[k][i])
        tmp["data"] = data
        ret.append(tmp)

    return ret

