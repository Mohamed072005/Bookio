import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { BookService } from "./book.service";
import { CreateBookDTO } from "./dto/create.book.dto";
import { JWTAuthGuard } from "src/common/guards/jwt.auth.guard";
import { DynamodbService } from "src/databse/dynamodb.service";
import { BookEntity } from "./book.entity";
import { UpdateBookDTO } from "./dto/update.book.dto";
import { BookIdParamDTO } from "./dto/book.id.param.dto";

@Controller('books')
export class BookController {
    constructor(
        private readonly bookService: BookService,
        private readonly dynamodbService: DynamodbService
    ) { }

    @Post()
    @UseGuards(JWTAuthGuard)
    @UsePipes(new ValidationPipe({
        transform: true,
        exceptionFactory: (errors) => {
            const formattedErrors = errors.map(error => ({
                field: error.property,
                constraints: Object.values(error.constraints || {})
            }));

            throw new BadRequestException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Validation failed',
                errors: formattedErrors
            });
        }
    }))
    async createBook(@Body() createBokDTO: CreateBookDTO): Promise<{ statusCode: Number, book: BookEntity, message: String }> {
        try {
            const book = await this.bookService.handelCreateBook(createBokDTO);
            return {
                statusCode: HttpStatus.CREATED,
                book: book,
                message: 'Book created successfully'
            }
        } catch (err: any) {
            if (err instanceof HttpException) {
                throw new HttpException({ message: err.getResponse() }, err.getStatus());
            }
            throw new HttpException({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'An unexpected error occurred',
                error: err.message || 'Internal Server Error'
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }



    @Get()
    async getBooks(): Promise<{ statusCode: Number, books: BookEntity[], message: String }> {
        try {
            const books = await this.dynamodbService.scan(this.bookService.TABLE_NAME)
            return {
                statusCode: HttpStatus.ACCEPTED,
                books: books,
                message: 'Books fetched successfully'
            }
        } catch (err) {
            if (err instanceof HttpException) {
                throw new HttpException({ message: err.getResponse() }, err.getStatus());
            }
            throw new HttpException({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'An unexpected error occurred',
                error: err.message || 'Internal Server Error'
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Put(':id')
    @UseGuards(JWTAuthGuard)
    @UsePipes(new ValidationPipe({
        transform: true,
        exceptionFactory: (errors) => {
            const formattedErrors = errors.map(error => ({
                field: error.property,
                constraints: Object.values(error.constraints || {})
            }));

            throw new BadRequestException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Validation failed',
                errors: formattedErrors
            });
        }
    }))
    async updateBook(
        @Body() updateBookDTO: UpdateBookDTO,
        @Param() param: BookIdParamDTO
    ): Promise<{ statusCode: Number, book: BookEntity, message: String }> {
        try {
            const updatedBook = await this.bookService.handelUpdateBook(updateBookDTO, param);
            return {
                statusCode: HttpStatus.ACCEPTED,
                book: updatedBook,
                message: 'Book updated successfully'
            }
        } catch (err) {
            if (err instanceof HttpException) {
                throw new HttpException({ message: err.getResponse() }, err.getStatus());
            }
            throw new HttpException({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'An unexpected error occurred',
                error: err.message || 'Internal Server Error'
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Delete(':id')
    @UseGuards(JWTAuthGuard)
    async deleteBook(
        @Param() param: BookIdParamDTO
    ): Promise<{ statusCode: Number, message: String }> {
        try {
            await this.bookService.handelDeleteBook(param);
            return {
                statusCode: HttpStatus.ACCEPTED,
                message: 'Book deleted successfully'
            }
        } catch (err) {
            if (err instanceof HttpException) {
                throw new HttpException({ message: err.getResponse() }, err.getStatus());
            }
            throw new HttpException({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'An unexpected error occurred',
                error: err.message || 'Internal Server Error'
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}