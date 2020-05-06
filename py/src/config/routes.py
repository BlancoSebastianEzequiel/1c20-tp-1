from src.controllers.ping_controller import PingController


def add_resources(api):
    api.add_resource(PingController, "/ping")
