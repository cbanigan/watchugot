from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app)

@app.route("/", methods=["POST"])

@app.route("/login/<username>/<eventid>", methods=["GET", "POST"])
def login(username, eventid):
	data = {"user": username,
			"isLoggedIn": 1,
			"event":eventid}
	return jsonify(data)

# @TODO: Convert event items to an array
@app.route("/addEvent/<eventName>/<eventItems>", methods=["GET", "POST"])
def createEvent(eventName):
    # print("ran")
    const uuidV4 = require('uuid/v4');
    
    data = {"eventName": eventName,
           "eventItems": eventItems.get_json(),
           "eventID": uuidV4()}
    
    # return "ran"
    return jsonify(data)


app.run()

# import socket
# import sys
#  
# HOST = ''   # Symbolic name, meaning all available interfaces
# PORT = 1234 # Arbitrary non-privileged port
#  
# socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# print 'Socket created'
#  
# #Bind socket to local host and port
# try:
#     socket.bind((HOST, PORT))
# except socket.error as msg:
#     print 'Bind failed. Error Code : ' + str(msg[0]) + ' Message ' + msg[1]
#     sys.exit()
#      
# print 'Socket bind complete'
#  
# #Start listening on socket
# socket.listen(10)
# print 'Socket now listening'
#  
# #now keep talking with the client
# while 1:
#     #wait to accept a connection - blocking call
#     conn, addr = socket.accept()
#     print 'Connected with ' + addr[0] + ':' + str(addr[1])
#      
# socket.close()
