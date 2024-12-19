import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DynamodbService } from "src/databse/dynamodb.service";
import { CreateBookDTO } from "./dto/create.book.dto";
import { BookEntity } from "./book.entity";
import { v4 as uuidv4 } from 'uuid';
import { UpdateBookDTO } from "./dto/update.book.dto";
import { BookIdParamDTO } from "./dto/book.id.param.dto";


@Injectable()
export class BookService {
    public readonly TABLE_NAME = 'Books'

    constructor(private readonly dynamodbService: DynamodbService) {}

    async handelCreateBook(createBookDTO: CreateBookDTO): Promise<BookEntity> {
        const findBook = await this.dynamodbService.findBookByName(createBookDTO.title);
        if(findBook) throw new HttpException(`Book with this title '${createBookDTO.title}' already exists`, HttpStatus.BAD_REQUEST);
        const book: BookEntity = {
            id: uuidv4(),
            ...createBookDTO,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
        return await this.dynamodbService.put(this.TABLE_NAME, book);
    }

    async handelUpdateBook(updateBookDTO: UpdateBookDTO, bookId: BookIdParamDTO): Promise<BookEntity>{
        const bookExists = await this.dynamodbService.findBookById(bookId);
        if(!bookExists) throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
        const uniqueBookTitle = await this.dynamodbService.findAlreadyExistsBookByNameForUpdate(updateBookDTO.title, bookId);
        if(uniqueBookTitle) throw new HttpException(`Book with this title '${updateBookDTO.title}' already exists`, HttpStatus.BAD_REQUEST);
        const book = await this.dynamodbService.update(this.TABLE_NAME, {id: bookId.id}, updateBookDTO);
        return book;
    }

    async handelDeleteBook (bookId: BookIdParamDTO) {
        const findBook = await this.dynamodbService.findBookById(bookId);
        if(!findBook) throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
        await this.dynamodbService.delete(this.TABLE_NAME, {id: bookId.id});
    }
}