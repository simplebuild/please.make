FROM ubuntu:disco

RUN apt-get update && \
    apt-get install -y \
        wget \
        git \
        unzip

# please
RUN apt-get install -y xz-utils curl && \
    curl -s https://get.please.build | bash
RUN ln -s /root/.please/plz /usr/local/bin/

# node
ARG NODE_VERSION=12.10.0
RUN cd /tmp && \
    wget -q https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.gz && \
    tar -C /usr/local -xzf node-v${NODE_VERSION}-linux-x64.tar.gz --strip 1

# python
RUN apt-get install -y python3.7 python3 python3-pip && pip3 install virtualenv

# java
RUN apt-get install -y openjdk-12-jdk

# go
ARG GO_VERSION=1.13
RUN cd /tmp && \
    wget -q https://dl.google.com/go/go${GO_VERSION}.linux-amd64.tar.gz && \
    tar -C /usr/local -xzf go${GO_VERSION}.linux-amd64.tar.gz
RUN ln -s /usr/local/go/bin/go /usr/local/bin/

# docker
ARG DOCKER_VERSION=18.06.1-ce
RUN cd /tmp && \
    wget -q https://download.docker.com/linux/static/stable/x86_64/docker-${DOCKER_VERSION}.tgz && \
    tar -C /usr/local/bin -xzf docker-${DOCKER_VERSION}.tgz --strip 1 docker/docker

# cleanup
RUN rm -rf /tmp/*
