# how-to :: CREATE A DIGITAL OCEAN DROPLET WITH UBUNTU AND APACHE
---
## Overview
Guide to creating an ubuntu 20.04 virtual machine ("droplet") and installing Apache2 web server on it.

### Estimated Time Cost: 0.5 hrs (assuming no issues)

### Prerequisites:
A digital ocean account, ideally linked to your github account
An available ssh key, obtainable with the command `ssh keygen`


1. With your public key copied, add it on Digital Ocean to your list of SSH keys
2. Create a droplet of the 5 dollar plan variety, being sure to add your ssh key on the creation page
3. To initially access your droplet, enter `ssh root@droplet_ip`
4. Next, create a user with the command `adduser username`. Enter user info as prompted in the terminal
5. Run `usermod -aG sudo username` to give root access privileges to your new user
6. Run `su username` to enter the account of the new user
7. Run `rsync --archive --chown=rayat:rayat ~/.ssh /home/rayat` to add your ssh key to the new user, so that you can ssh directly into your user
8. I would advise closing and reopening the terminal at this stage and re-entering via SSH into your new user account
9. Install apache2 with root priviliges with `sudo apt install apache2`
10. If your firewall is active, run `sudo ufw allow in "Apache"`
11. Install sqlite3 with `sudo apt install sqlite3`
12. Install python with `sudo apt-get install python3.8 python3-pip`
13. Congrats, your droplet is successfully set up. Test apache2 installation if you wish by visiting http://(server ip)
### Resources
* https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-20-04
* https://www.digitalocean.com/community/questions/error-permission-denied-publickey-when-i-try-to-ssh
* https://www.digitalocean.com/community/questions/secure-ubuntu-server-for-non-root-user-using-only-ssh-keys?answer=22286
* https://www.digitalocean.com/community/tutorials/how-to-create-a-new-sudo-enabled-user-on-ubuntu-18-04-quickstart
* https://www.digitalocean.com/docs/droplets/how-to/
* https://www.digitalocean.com/community/questions/error-permission-denied-publickey-when-i-try-to-ssh?answer=44730
* https://www.digitalocean.com/docs/droplets/how-to/connect-with-ssh/putty/
* https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/create-with-openssh/
* https://www.digitalocean.com/docs/droplets/how-to/connect-with-ssh/openssh/


Accurate as of (last update): 2022-01-18

#### Contributors:  
Rayat Roy, period 1. 


