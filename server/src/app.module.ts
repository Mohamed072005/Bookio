import { Module, OnModuleInit } from '@nestjs/common';
import { DatabseModule } from './databse/databse.module';
import { BooksModule } from './books/books.module';
import { DynamoDBTableCreator } from './config/dynamodb.table.creator';

@Module({
  imports: [DatabseModule, BooksModule],
  providers: [DynamoDBTableCreator]
})
export class AppModule implements OnModuleInit {
  constructor(private readonly dynamoDBTableCreator: DynamoDBTableCreator) {}

  async onModuleInit() {
    try{
      await this.dynamoDBTableCreator.createBookTable();
    }catch(err: any){
      console.error('Failed to create DynamoDB table', err);
    }
  }
}
