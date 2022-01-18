# how-to :: CREATE A DIGITAL OCEAN DROPLET WITH UBUNTU AND APACHE
---
## Overview
Guide to creating an ubuntu 20.04 virtual machine ("droplet") and installing Apache2 web server on it.

### Estimated Time Cost: 0.5 hrs (assuming no issues)

### Prerequisites:
A digital ocean account, ideally linked to your github account
An available ssh key, obtainable with the command `ssh keygen`


1. With your public key copied, add it on Digital Ocean to your list of SSH keys https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/to-account/
2. Create a droplet of the 5 dollar plan variety, being sure to add your ssh key on the creation page
3. To initially access your droplet, enter `ssh root@droplet_ip`
4. Step, with
    ```
    generic code block or terminal command
    ```
   and/or...
1. Step, with [hyperlink](https://xkcd.com)s...

rsync --archive --chown=rayat:rayat ~/.ssh /home/rayat
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

(please verify ; some of these are old links)

---

Accurate as of (last update): 2022-01-11

#### Contributors:  
Clyde "Thluffy" Sinclair  
Topher Mykolyk, pd0  

_Note: the two spaces after each name are important! ( <--burn after reading)  _

