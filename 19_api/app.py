#<Rayat> <Roy> as part of team go stop
#SoftDev
#K<19> -- <Using an api to display images and text on a website>
#<2021>-<11>-<24>
#time spent: 1 (had to find out how to run on the mac)
import urllib
from flask import Flask,render_template
import json
app = Flask(__name__) 
@app.route('/')
def display():
    req = urllib.request.urlopen('https://api.nasa.gov/planetary/apod?api_key=pJkgjfYApMvTrcMw0O7hdO7Chooqu9b4jcuDu2zC') #returns json
    text = json.load(req)
    #for i in text:
        #print(json.load(r)[i])
    picture = (text['url'])
    description = (text['explanation'])
    return render_template('main.html', pic = picture, desc = description)
        


if __name__ == '__main__':
    app.debug = True
    app.run()

