from flask_restful import Resource


class PingController(Resource):
    @classmethod
    def get(cls):
        return 'python - ping'
