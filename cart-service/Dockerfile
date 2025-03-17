FROM golang:1.23-alpine

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN go build -o cart-service

EXPOSE 8082

CMD ["./cart-service"]
