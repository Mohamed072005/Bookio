import { ScanCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, UpdateCommand, UpdateCommandInput } from "@aws-sdk/lib-dynamodb";
import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { BookIdParamDTO } from "src/books/dto/book.id.param.dto";
import { BorrowBookDTO } from "src/books/dto/borrow.book.dto";
import { getDynamoDBClient } from "src/config/dynamodb.config";
import { ReservationEntity } from "src/reservations/reservation.entity";

@Injectable()

export class ReservationDynamodbService implements OnModuleInit {
    private docClient: DynamoDBDocumentClient;
    private readonly logger = new Logger(ReservationDynamodbService.name)
    onModuleInit() {
        this.docClient = getDynamoDBClient()
    }

    async getReservationByUserIdaNDbookId(bookId: BookIdParamDTO, userId: string) {
        try {
            const params = {
                TableName: 'Reservation',
                FilterExpression: 'book_id = :book_id AND user_id = :user_id',
                ExpressionAttributeValues: {
                    ':book_id': { S: bookId.id },
                    ':user_id': { S: userId }
                }
            }
    
            const response = await this.docClient.send(new ScanCommand(params));
            return response.Items?.[0] || null;
        } catch (err: any) {
            this.logger.error(err);
            throw err;
        }
    }

        async put(item: BorrowBookDTO) {
            try {
                const params = {
                    TableName: 'Reservation',
                    Item: {
                        ...item,
                        reservation_date: item.reservation_date.toISOString(),
                        return_date: item.return_date.toISOString(),
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                }
                console.log(params)
                await this.docClient.send(new PutCommand(params));
                return item as ReservationEntity ;
            } catch (error: any) {
                this.logger.error(`Error creating reservation in :`, error);
                throw error;
            }
        }

        async updateBookQuantity(bookId: BookIdParamDTO, decrease: boolean) {
            try{
                const params: UpdateCommandInput = {
                    TableName: 'Books',
                    Key: {
                        id: bookId.id
                    },
                    UpdateExpression: 'SET quantity = quantity - :val',
                    ExpressionAttributeValues: {
                        ':val': decrease ? -1 : 1
                    },
                    ReturnValues: 'ALL_NEW'
                }

                const response = await this.docClient.send(new UpdateCommand(params));
                return response.Attributes || false;
            }catch(err: any){
                console.log(err)
                this.logger.error(err);
                throw err;
            }
        }
}