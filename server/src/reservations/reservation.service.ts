import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { BookIdParamDTO } from "src/books/dto/book.id.param.dto";
import { BorrowBookDTO } from "src/books/dto/borrow.book.dto";
import { ReservationDynamodbService } from "src/databse/reservation.dynamodb.service";
import { ReservationEntity } from "./reservation.entity";
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class ReservationService {
    constructor(private readonly reservationDynamoService: ReservationDynamodbService) { }

    async getReservations(bookId: BookIdParamDTO, userId: string) {
        const checkedBook = await this.reservationDynamoService.getReservationByUserIdaNDbookId(bookId, userId)
        if (checkedBook) throw new HttpException("You're already borrowed this book", HttpStatus.BAD_REQUEST)
    }

    async createTheReservation(borrowBookDTO: BorrowBookDTO, bookId: BookIdParamDTO) {
        const confirmReservation = await this.reservationDynamoService.updateBookQuantity(bookId, false);
        console.log('-------------After remove 1--------------');
        if (!confirmReservation) throw new HttpException('Reservation not confirmed', HttpStatus.BAD_REQUEST)
        const reservationData: ReservationEntity = {
            id: uuidv4(),
            book_id: bookId.id,
            ...borrowBookDTO,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
        const reservation = await this.reservationDynamoService.put(reservationData)
        if (!reservation){
            await this.reservationDynamoService.updateBookQuantity(bookId, true);
            console.log('-------------After add 1--------------');
            throw new HttpException('Reservation not created', HttpStatus.BAD_REQUEST)
        } 
        return reservation;
    }
}