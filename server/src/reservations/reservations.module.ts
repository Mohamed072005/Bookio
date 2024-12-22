import { Module } from '@nestjs/common';
import { DatabseModule } from 'src/databse/databse.module';
import { ReservationService } from './reservation.service';
import { ReservationDynamodbService } from 'src/databse/reservation.dynamodb.service';

@Module({
    imports: [DatabseModule],
    providers: [ReservationService, ReservationDynamodbService],
    exports: [ReservationService]
})
export class ReservationsModule {}
