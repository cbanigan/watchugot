from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "hello"

@app.route("/login")
def login():
    return "you are logged in"

app.run()


