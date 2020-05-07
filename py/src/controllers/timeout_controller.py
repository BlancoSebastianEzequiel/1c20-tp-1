from flask_restful import Resource
from flask import request
import time

DEFAULT_TIMEOUT = 5


class TimeoutController(Resource):
    @classmethod
    def get(cls):
        timeout = request.args.get('t')
        timeout = int(timeout) if timeout else DEFAULT_TIMEOUT
        time.sleep(timeout)
        return f'python - timeout: {timeout}'
