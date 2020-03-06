FROM python:3.7

ENV PYTHONPATH=/app

COPY dist/example_python/requirements.txt /app/example_python/requirements.txt
RUN pip3 install -r /app/example_python/requirements.txt

COPY dist/example_python /app/example_python

CMD ["python3", "/app/example_python/01-simple/main.py"]
