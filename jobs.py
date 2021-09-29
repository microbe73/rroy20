# Rayat Roy, Theo Fahey, Michelle Lo
# SoftDev
# K<06> -- Divine your Destiny! (Python practice)
# Summary: Practice reading files in Python and selecting based on percentage-weighted averages
# 2021-09-28
import csv
import random

with open('occupations.csv') as csvfile:
    #Separate lines by comma
    spamreader = csv.reader(csvfile, delimiter= ",")
    jobs = {}
    i = 0;
    for row in spamreader:
        if (i == 0):
            i += 1
        else:
            jobs[row[0]] = float(row[1]);
        
#random selector
r = random.random() 
s = 0
for key in jobs:
    s+= jobs[key]/100
    if(s > r):
        print(key)
        break

