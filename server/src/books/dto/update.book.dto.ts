import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateBookDTO {
    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    desciption: string

    @IsString()
    @IsOptional()
    author?: string

    @IsNumber()
    @IsOptional()
    publicationYear?: number;

    @IsNotEmpty()
    @IsNumber()
    quantity: number

    @IsNotEmpty()
    @IsNumber()
    price: number
}