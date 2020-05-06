from flask import Flask, config
from flask_restful import Api
from src.config.routes import add_resources


def create_app():
    app = Flask(__name__)
    app.config.from_object(config)
    api = Api(app)
    add_resources(api)
    return app
