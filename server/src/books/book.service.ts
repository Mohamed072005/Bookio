import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DynamodbService } from "src/databse/dynamodb.service";
import { CreateBookDTO } from "./dto/create.book.dto";
import { BookEntity } from "./book.entity";
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class BookService {
    public readonly TABLE_NAME = 'Books'

    constructor(private readonly dynamodbService: DynamodbService) {}

    async handelCreateBook(createBookDTO: CreateBookDTO): Promise<BookEntity> {
        const findBook = await this.dynamodbService.findBookByName(createBookDTO.title);
        console.log(findBook);
        if(findBook) {
            throw new HttpException(`Book with this title '${createBookDTO.title}' already exists`, HttpStatus.BAD_REQUEST);
        }
        const book: BookEntity = {
            id: uuidv4(),
            ...createBookDTO,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
        return await this.dynamodbService.put(this.TABLE_NAME, book);
    }
}