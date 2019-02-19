# wget https://raw.githubusercontent.com/kgoe/js/master/test.sh

python -v
node -v
php -v

# sudo apt-get install python3

# nvm for current user only !
# wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

# node.js : not recommended to run with root privileges
# apache and php default user & user permissions

### create user
# groupadd <somegroup>
# useradd -m <user> -g <group>
# passwd <user>

# groupadd webmgr21
# useradd -m webmgr21 -g webmgr21
# passwd webmgr21

# groups
# users

### user is not in the sudoers file
# usermod -a -G <group> <username>
### OR
# cp /etc/sudoers /etc/sudoers.orginal
# visudo
