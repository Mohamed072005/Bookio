import { Body, Controller, HttpException, HttpStatus, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { BookService } from "./book.service";
import { CreateBookDTO } from "./dto/create.book.dto";

@Controller('books')
@UsePipes(new ValidationPipe({ transform: true }))
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Post()
    async createBook(@Body() createBokDTO: CreateBookDTO) {
        try{
            const book = await this.bookService.handelCreateBook(createBokDTO);
            return {
                statusCode: HttpStatus.CREATED,
                book: book,
                message: 'Book created successfully'
            }
        }catch(err: any) {
            throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}