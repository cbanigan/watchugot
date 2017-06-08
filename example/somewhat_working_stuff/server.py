from flask import Flask
from flask import jsonify
from mongoengine import connect, ListField, StringField, MapField, Document,EmbeddedDocumentField
import uuid
import pprint
app = Flask(__name__)


connect('watchugot')

class Person(Document):
		name = StringField(required=True)
		items_bringing = ListField(StringField());



class Event(Document):
	event_id = StringField(required=True, max_length=200)
	items = ListField(StringField())
	people = ListField(EmbeddedDocumentField("Person"))

@app.route("/")
def index():
	return "nfdiosnpi"

@app.route("/eventid", methods=["GET", "POST"])
def login(username, eventid):
	data = {"user": username,
			"isLoggedIn": 1,
			"event":eventid}
	return jsonify(data)


@app.route("/<eventid>", methods=["GET"])
def getEvent(eventid):
	return Event.objects(event_id=eventid).to_json()

@app.route("/addItem/<eventid>/<item>", methods=["POST"])
def addItemToEvent(eventid, item):
	Event.objects(event_id=eventid).update(add_to_set__items=[item])
	return Event.objects(event_id=eventid).to_json()


@app.route("/addPerson/<eventid>/<name>", methods=["POST"])
def addPersonToEvent(eventid, name):
	new_person = Person(name, [])
	new_person.save()
	Event.objects(event_id=eventid).update(add_to_set__people=[new_person])
	return Event.objects(event_id=eventid).to_json()

@app.route("/mapItemToName/<eventid>/<name>/<item>", methods=["POST"])
def mapItemToName(eventid, name, item):
	Event.objects(event_id=eventid).first().people.items_bringing.append(item)
	Event.objects(event_id=eventid).get().people[0].items_bringing.append(item)
	pprint.pprint(Event.objects(event_id=eventid).get().people[0].items_bringing)
	return "ddnos"

@app.route("/createEvent", methods=["POST"])
def createEvent():
	uid = uuid.uuid4()
	new_event = Event(str(uid)[:8], [], [])
	new_event.save()
	return "success!"
app.run(debug=True)