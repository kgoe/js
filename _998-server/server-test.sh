# wget https://raw.githubusercontent.com/kgoe/js/master/_998-server/test.sh

python -v
python3 --version
node -v
php -v

###
### post install, enable network for ssh
###

# ifconfig
# vim /etc/network/interfaces

# auto enp0s3
# iface enp0s3 inet dhcp
# metric 10

# auto enp0s8
# iface enp0s8 inet dhcp
# metric 100

###
### update
###

# sudo apt-get update
# sudo apt-get upgrade
## sudo apt-get dist-upgrade

###
### tools
###

# sudo apt-get install python3

# nvm for current user only !
# wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

# node.js : not recommended to run with root privileges
# apache and php default user & user permissions

###
### create user
###

# groupadd <somegroup>
# useradd -m <user> -g <group>
# passwd <user>

# groupadd webmgr21
# useradd -m webmgr21 -g webmgr21
# passwd webmgr21

# groups
# users

###
### user is not in the sudoers file
###

# usermod -a -G <group> <username>

###
### OR
###

# cp /etc/sudoers /etc/sudoers.orginal
# visudo

###
### web server
###

# sudo apt-get install apache2
# update apache config /etc/apache2/
