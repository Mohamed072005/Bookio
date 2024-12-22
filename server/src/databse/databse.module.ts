import { Module } from '@nestjs/common';
import { BookDynamodbService } from './book.dynamodb.service';
import { ReservationDynamodbService } from './reservation.dynamodb.service';

@Module({
    imports: [],
    providers: [BookDynamodbService, ReservationDynamodbService],
    exports: [BookDynamodbService, ReservationDynamodbService]
})
export class DatabseModule {}
