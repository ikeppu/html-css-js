#!/bin/bash

#start
apt update
apt upgrade
apt install curl

#nginx setup
apt install nginx

#nodejs setup
curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - 
apt-get install -y Node.js

#docker setup
apt-get remove docker docker-engine docker.io containerd runc
apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
apt install docker.io


#end 
apt update
apt upgrade
clear
echo #############
node -v
echo #############
nginx -v
echo #############
docker -v
echo #############