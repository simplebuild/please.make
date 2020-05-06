FROM nginx:1.17.10

COPY dist/* /usr/share/nginx/html/
# Touch all copied files to update last modified time (COPY command does not preserve it)
# Last modified time is used by nginx to generate Etag
RUN find /usr/share/nginx/html -type f -exec touch \{\} \;
