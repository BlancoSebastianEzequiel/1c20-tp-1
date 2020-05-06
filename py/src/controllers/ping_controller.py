from flask import jsonify
from flask_restful import Resource


class PingController(Resource):
    @classmethod
    def get(cls):
        res = jsonify("ping")
        res.status_code = 200
        return res
