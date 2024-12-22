import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { DatabseModule } from 'src/databse/databse.module';
import { BookDynamodbService } from 'src/databse/book.dynamodb.service';
import { ReservationsModule } from 'src/reservations/reservations.module';
import { ReservationService } from 'src/reservations/reservation.service';

@Module({
    imports: [DatabseModule, ReservationsModule],
    controllers: [BookController],
    providers: [BookService, BookDynamodbService, ReservationService]
})
export class BooksModule {}
