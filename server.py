"""React Project"""
from flask import Flask, render_template, redirect, request, session

app = Flask(__name__)



@app.route("/")
def homepage():
    return render_template("base.html")

@app.route("/clock", methods=["POST"])
def add():
    return

@app.route("/something", methods=["POST"])
def search():
    return 


if __name__ == "__main__":
    # model.connect_to_db(app)
    app.run(),
    host = "0.0.0.0",
    use_reloaded=True,
    use_debugger=True,