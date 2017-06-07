import socket
import sys
 
HOST = ''   # Symbolic name, meaning all available interfaces
PORT = 1234 # Arbitrary non-privileged port
 
socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
print 'Socket created'
 
#Bind socket to local host and port
try:
    socket.bind((HOST, PORT))
except socket.error as msg:
    print 'Bind failed. Error Code : ' + str(msg[0]) + ' Message ' + msg[1]
    sys.exit()
     
print 'Socket bind complete'
 
#Start listening on socket
socket.listen(10)
print 'Socket now listening'
 
#now keep talking with the client
while 1:
    #wait to accept a connection - blocking call
    conn, addr = socket.accept()
    print 'Connected with ' + addr[0] + ':' + str(addr[1])
     
socket.close()



