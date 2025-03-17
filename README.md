# Docker Build
docker compose -f docker-compose-services.yml --env-file ./.env up --build

# Docker run
docker compose -f docker-compose-services.yml up

# Run migrations
docker exec -t NotificationsService php artisan migrate
docker exec -t PaymentService php artisan migrate