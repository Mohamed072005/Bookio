import { Module, OnModuleInit } from '@nestjs/common';
import { DatabseModule } from './databse/databse.module';
import { BooksModule } from './books/books.module';
import { DynamoDBTableCreator } from './config/dynamodb.table.creator';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
  imports: [DatabseModule, BooksModule, ReservationsModule],
  providers: [DynamoDBTableCreator]
})
export class AppModule implements OnModuleInit {
  constructor(private readonly dynamoDBTableCreator: DynamoDBTableCreator) {}

  async onModuleInit() {
    try{
      await this.dynamoDBTableCreator.createBookTable();
      await this.dynamoDBTableCreator.createReservationTable();
    }catch(err: any){
      console.error('Failed to create DynamoDB tables', err);
    }
  }
}
