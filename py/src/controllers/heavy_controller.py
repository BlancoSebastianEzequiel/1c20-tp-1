from flask_restful import Resource
from flask import request
import time

DEFAULT_TIMEOUT = 5


class HeavyController(Resource):
    @classmethod
    def get(cls):
        timeout = request.args.get('t')
        timeout = int(timeout) if timeout else DEFAULT_TIMEOUT

        now = time.time()
        end = now + timeout
        while now <= end:
            now = time.time()

        return f'python - heavy: {timeout}'
