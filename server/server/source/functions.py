#create mongoDB client
#TODO: what port is db on?????
client = MongoClient('localhost', 27017)

#get the database from mongoDB client 
database = client.database

#get the tables from the database
users = database.users




#function that handles client-server connections
#creates a thread for a connected client
def clientConnected(connection):

    #sending message to connected client
    connection.send('Connected to server successfully\n')
    
    while 1:
        data = connection.recv(1024)
        reply = 'received something'
        if not data:
            break
            
        connection.send(reply)
        
    #client disconnected
    connection.close()



