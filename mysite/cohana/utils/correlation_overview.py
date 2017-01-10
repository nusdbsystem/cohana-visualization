import math
import json

retented_total = 8256
total = 57077
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

def calc_row(file_name):
    values = [];
    for i in range(1, 8):
        with open(data_file_path+file_name.strip()+'-'+str(i)+'.dat') as in_file:
            data = json.load(in_file)
            birth_total = data["result"][0]["measure"]
            a = data["result"][1]["measure"]
            b = birth_total - a
            c = retented_total - a
            d = total - a - b - c
            # values.append(round((total * a - birth_total * retented_total)
            #     / math.sqrt(retented_total * birth_total * (total - retented_total) * (total - birth_total)), 3))
            values.append(rho(a, b, c, d))

    return { 'yLabel': file_name.strip(), 'values': values};

def correlation_overview():
    xLabels = ['1 day', '2 days', '3 days', '4 days', '5 days', '6 days', '7 days'];
    series = [];
    series = [calc_row(file_name) for file_name in open(index_file)]
 
    values_dic = dict([(tuple(value['yLabel'].split('+')), value['values']) for value in series])
    x_label, y_label = zip(*[value for value in values_dic])

    x_label = list(set(x_label))
    y_label = list(set(y_label))
    matrix = [[(values_dic[(x,y)][-1] if (x,y) in values_dic else 0) for x in x_label] for y in y_label]
    return {'xLabels': xLabels, 'series': series, 'subXLabels': x_label, 'subYLabels': y_label, 'matrix': matrix}
