import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { DatabseModule } from 'src/databse/databse.module';
import { DynamodbService } from 'src/databse/dynamodb.service';

@Module({
    imports: [DatabseModule],
    controllers: [BookController],
    providers: [BookService, DynamodbService]
})
export class BooksModule {}
