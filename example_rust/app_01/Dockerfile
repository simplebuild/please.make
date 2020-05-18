FROM rust:1.43.1-alpine3.11

COPY sources/example_rust /example_rust

RUN cargo install --path /example_rust/app_01

CMD ["app_01"]
