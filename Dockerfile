FROM alpine:latest

WORKDIR /app

# Download PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v0.16.0/pocketbase_0.16.0_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /app/
RUN rm /tmp/pb.zip

EXPOSE 8090

# Start PocketBase
CMD ["./pocketbase", "serve", "--http=0.0.0.0:${PORT}"]