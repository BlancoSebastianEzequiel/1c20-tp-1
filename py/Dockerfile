FROM python:3.6
ADD . /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
ENV PYTHONPATH /usr/src/app
ENTRYPOINT ["sh", "scripts/start.sh"]
