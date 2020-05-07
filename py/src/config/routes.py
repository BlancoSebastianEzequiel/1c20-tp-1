from src.controllers.ping_controller import PingController
from src.controllers.timeout_controller import TimeoutController


def add_resources(api):
    api.add_resource(PingController, "/ping")
    api.add_resource(TimeoutController, "/timeout")
