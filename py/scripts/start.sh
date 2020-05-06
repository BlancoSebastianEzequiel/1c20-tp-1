#!/usr/bin/env bash

echo "RUNNING SERVER"
gunicorn -w 1 -b :4000 src.wsgi:app
