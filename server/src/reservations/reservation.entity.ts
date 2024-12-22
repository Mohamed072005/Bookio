export interface ReservationEntity {
    id: string,
    book_id: string,
    user_id: string,
    reservation_date: Date,
    return_date: Date,
    createdAt: string;
    updatedAt: string;
}