from flask import Flask
from flask import jsonify
app = Flask(__name__)

@app.route("/")
def index():
	return "nfdiosnpi"

@app.route("/login/<username>/<eventid>", methods=["GET", "POST"])
def login(username, eventid):
	data = {"user": username,
			"isLoggedIn": 1,
			"event":eventid}
	return jsonify(data)

app.run()