FROM python:3.11-slim

WORKDIR /app

COPY . /app

RUN command

RUN pip install -r requirements.txt

