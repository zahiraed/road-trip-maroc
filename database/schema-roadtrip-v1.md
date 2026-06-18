# ROAD TRIP MAROC - DATABASE MODEL V1

## Roles

- ADMIN
- AGENCY
- TRAVELER

## Entities

### Role

- id
- name

### User

- id
- first_name
- last_name
- email
- password
- phone
- role_id
- is_verified
- created_at
- updated_at

### Agency

- id
- user_id
- name
- description
- email
- phone
- address
- website
- logo_url
- status
- created_at

### Destination

- id
- name
- region
- description
- cover_image

### Category

- id
- name
- description

### Trip

- id
- agency_id
- destination_id
- category_id
- title
- description
- duration_days
- price
- max_participants
- status
- created_at

### TripImage

- id
- trip_id
- image_url

### Reservation

- id
- user_id
- trip_id
- reservation_date
- participants
- total_price
- status

### Payment

- id
- reservation_id
- amount
- payment_method
- transaction_id
- status
- payment_date

### Review

- id
- user_id
- trip_id
- rating
- comment
- created_at

### Favorite

- id
- user_id
- trip_id

### BlogPost

- id
- author_id
- title
- slug
- content
- cover_image
- published_at

### Newsletter

- id
- email
- subscribed_at
# Modules fonctionnels

## Authentification
- User
- Role

## Gestion des agences
- Agency

## Gestion des destinations
- Destination

## Gestion des voyages
- Trip
- TripDay
- TripStop

## Réservations
- Booking

## Paiements
- Payment

## Avis
- Review

## Favoris
- Favorite

## Newsletter
- Newsletter

## Contact
- ContactMessage
# Relations métier

## User
- appartient à un Role
- peut créer plusieurs Bookings
- peut écrire plusieurs Reviews
- peut avoir plusieurs Favorites

## Agency
- peut publier plusieurs Trips

## Destination
- peut être utilisée dans plusieurs Trips

## Trip
- appartient à une Agency
- possède plusieurs TripDays
- possède plusieurs Bookings
- possède plusieurs Reviews

## TripDay
- appartient à un Trip
- possède plusieurs TripStops

## TripStop
- appartient à un TripDay
- référence une Destination

## Booking
- appartient à un User
- appartient à un Trip
- possède un Payment

## Payment
- appartient à un Booking

## Review
- appartient à un User
- appartient à un Trip

## Favorite
- appartient à un User
- appartient à un Trip

## Newsletter
- indépendant

## ContactMessage
- indépendant