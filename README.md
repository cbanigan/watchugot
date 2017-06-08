# watchugot
Carbon 2017 Hackathon

### Installation
Python - already installed on our Macs

Pip - Type the following into the terminal:

```bash
sudo easy_install pip
```
Flask - Partially installed in our repository, activate by typing:
```bash
cd server
source bin/activate
sudo pip install -U flask-cors
```

node - https://nodejs.org/en/

Webserver
```bash
npm install http-server -g
```

### Starting the Engine
```bash
cd watchugot/server/server
source bin/activate
watchugot/server/server/source
python server.py
cd watchugot/
http-server
```
 flask api on port 5000

web page server on port 8080

The data flows in this manner:

HTML

JS

Python
