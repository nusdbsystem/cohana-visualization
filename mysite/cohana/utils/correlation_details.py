import math
import json

retented_total = 73925 
total = 157077
index_file = "cohana/data/index"
data_file_path = "cohana/data/"

# a = performed and retent , b = performed but not retent
# c = not performed but retent, d = not performed and not retent
def rho(a, b, c, d):
    n = a+b+c+d
    sigma_x_y = a
    sigma_x = a + b
    sigma_y = a + c
    sigma_xx = a + b
    sigma_x_2 = sigma_x * sigma_x
    sigma_yy = a + c
    sigma_y_2 = sigma_y * sigma_y

    res = (n*sigma_x_y - sigma_x * sigma_y) / \
            math.sqrt((n*sigma_xx-sigma_x_2)*(n*sigma_yy-sigma_y_2))
    return round(res, 3)

def file_name_by_row(r):
    i = 0;
    for line in open(index_file):
        res = line
        if (r == i):
            break
        i += 1;
    return res

def calc_cell(row, col):
    res = []
    file_name = file_name_by_row(row)
    with open(data_file_path+file_name.strip()+'-'+str(col+1)+'-sub.dat') as in_file:
        data = json.load(in_file)["result"]
        birth = {}
        retent = {}
        for i in range(0, len(data)):
            if (data[i]["age"] == 0):
                birth[data[i]["cohort"]] = data[i]["measure"]
            else:
                retent[data[i]["cohort"]] = data[i]["measure"]
        for key in birth:
            a = retent.get(key, 0)
            b = birth[key] - a
            c = retented_total - a
            d = total - a - b - c
            val = rho(a, b ,c, d)
            tmp = key, math.fabs(val)
            res.append(tmp)
    return file_name, sorted(res, key=lambda x: x[1])
        
def correlation_details(row, col):
    tmp = calc_cell(row,col)
    birth_event1 = tmp[0].split('+')[0].strip()
    birth_event2 = tmp[0].split('+')[1].strip()
    out_data = {
        'ytitle': 'No. of Event (' + birth_event1 + ', ' + birth_event2 + ')',
        'ydata': map(lambda x: x[0], tmp[1]),
        'xdata': map(lambda x: x[1], tmp[1]),
    }

    return out_data
