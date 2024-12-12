import { Injectable } from "@nestjs/common";
import { DynamodbService } from "src/databse/dynamodb.service";
import { CreateBookDTO } from "./dto/create.book.dto";
import { BookEntity } from "./book.entity";
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class BookService {
    private readonly TABLE_NAME = 'Books'

    constructor(private readonly dynamodbService: DynamodbService) {}

    async handelCreateBook(createBookDTO: CreateBookDTO): Promise<BookEntity> {
        const book: BookEntity = {
            id: uuidv4(),
            ...createBookDTO,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
        return await this.dynamodbService.put(this.TABLE_NAME, book);
    }
}