from flask import Flask

app = Flask(__name__)


@app.route('/')
def index():
    return 'Home'


@app.route('/about')
def about():
    return 'contacto aboute'