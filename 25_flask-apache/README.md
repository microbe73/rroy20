# how-to :: DEPLOY A FLASK APP ON APACHE2
---
## Overview
Flask is not built to serve -- on its own -- persistent or high-traffic sites. Apache, on the other hand, is. Luckily, Apache can be configured to use its industrial-grade machinery to serve Flask and other apps. Deploying your Flask app to an Apache2 server will allow anyone on the web to access your app at any time. 

### Estimated Time Cost: 25 mins assuming nothing goes wrong

### Prerequisites:
- A functioning LAMP stack
- Be very careful with versions of python in installations (Be sure that your wsgi was installed with the command `sudo apt-get install libapache2-mod-wsgi-py3`
### Steps:
1. Activate wsgi with `sudo a2enmod wsgi`
2. cd into /var/www and create a folder called FlaskApp
3. cd into this new folder and create a second folder called FlaskApp. cd into this new folder
4. run `sudo nano __init__.py` to create your flask file
5. Enter your flask code in the file and save
6. Create a conf file with sudo nano /etc/apache2/sites-available/FlaskApp.conf
7. Add the text from the tutorial site
8. In the higher FlaskApp folder (the one that contains a FlaskApp folder in it and nothing else) create the wsgi with sudo nano flaskapp.wsgi and add the text from the tutorial site
9. Reload apache with `systemctl reload apache2`
10. Install pip3 with `sudo apt-get install python3-pip`
11. Install virtual environment with `sudo apt install python3.8-venv`
12. Create a virtual environment with `sudo python3 -m venv env`
13. Activate the virtual environment
14. Run `sudo chown rayat:rayat venv/ -R` to ensure that you can access the virtual environment as the user
15. Install flask with the virtual environment active with `sudo pip3 install flask`
16. Open up your site at your virtual machine's IP address!

### Resources
* https://www.digitalocean.com/community/tutorials/how-to-deploy-a-flask-application-on-an-ubuntu-vps


Accurate as of (last update): 2022-01-20

#### Contributors:  
Rayat Roy, pd1. 
Justin Morrill, pd1. 
William Chen, pd1. 
Joshua Kloepfer, pd2. 
