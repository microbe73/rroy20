from flask import Flask
import random
import csv
app = Flask(__name__)

@app.route("/")

#def func2():
  #  r = random.random()
   # if(r< 0.5):
  #      return "small"
   # if(r > 0.5):
   #     return "large"
def reader():
    with open('occupations.csv') as csvfile:
        spamreader = csv.reader(csvfile, delimiter= ",")
        jobs = {} #dictionary created
        i = 0;
        for row in spamreader:
            if (i == 0):
                i += 1 #skips heading
            else:
                jobs[row[0]] = float(row[1]);
        return (str)(jobs.keys())   
app.run()
