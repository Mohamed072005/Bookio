import { DeleteCommand, DynamoDBDocumentClient, GetCommand, PutCommand, QueryCommand, ScanCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { getDynamoDBClient } from '../config/dynamodb.config';
import { BookEntity } from "src/books/book.entity";
import { BookIdParamDTO } from "src/books/dto/book.id.param.dto";
import { CreateBookDTO } from "src/books/dto/create.book.dto";

@Injectable()

export class BookDynamodbService implements OnModuleInit {
    private docClient: DynamoDBDocumentClient;
    private readonly logger = new Logger(BookDynamodbService.name);
    onModuleInit() {
        this.docClient = getDynamoDBClient()
    }

    async findBookByName(bookTitle: string) {
        try {
            const params = {
                TableName: 'Books',
                IndexName: 'title-index',
                KeyConditionExpression: 'title = :title',
                ExpressionAttributeValues: {
                    ':title': bookTitle
                }
            }
            const response = await this.docClient.send(new QueryCommand(params));
            return response.Items.length > 0 || null;
        } catch (err: any) {
            throw err
        }
    }

    async findAlreadyExistsBookByNameForUpdate(bookTitle: string, bookId: BookIdParamDTO) {
        try {
            const params = {
                TableName: 'Books',
                IndexName: 'title-index',
                KeyConditionExpression: 'title = :title',
                FilterExpression: 'id <> :id',
                ExpressionAttributeValues: {
                    ':title': bookTitle,
                    ':id': bookId.id
                }
            }
            const response = await this.docClient.send(new QueryCommand(params));
            return response.Items.length > 0 && response.Items[0].id !== bookId.id || null;
        } catch (err: any) {
            console.log(err);
            
            throw err
        }
    }

    async findBookById(bookId: BookIdParamDTO) {
        try {
            const params = {
                TableName: 'Books',
                ExpressionAttributeValues: {
                    ':id': bookId.id
                },
                KeyConditionExpression: 'id = :id',
                Limit: 1
            }
            const response = await this.docClient.send(new QueryCommand(params));
            return response.Items?.[0] as BookEntity || null;
        } catch (err: any) {
            throw err
        }
    }

    async put(tableName: string, item: BookEntity) {
        try {
            const params = {
                TableName: tableName,
                Item: {
                    ...item,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                }
            }
            await this.docClient.send(new PutCommand(params));
            return item;
        } catch (error: any) {
            this.logger.error(`Error creating book in ${tableName}:`, error);
            throw error;
        }
    }

    async get(tableName: string, key: Record<string, any>) {
        try {
            const params = {
                TableName: tableName,
                Key: key,
            };

            const response = await this.docClient.send(new GetCommand(params));
            return response.Item;
        } catch (error: any) {
            this.logger.error(`Error getting book from ${tableName}:`, error);
            throw error;
        }
    }

    async update(
        tableName: string,
        key: Record<string, any>,
        updates: Record<string, any>,
    ) {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { id, createdAt, ...updateFields } = updates;

            // Build update expression and attribute values
            const updateExpressions: string[] = [];
            const expressionAttributeNames: Record<string, string> = {};
            const expressionAttributeValues: Record<string, any> = {};

            Object.keys(updateFields).forEach((field, index) => {
                updateExpressions.push(`#field${index} = :value${index}`);
                expressionAttributeNames[`#field${index}`] = field;
                expressionAttributeValues[`:value${index}`] = updateFields[field];
            });

            // Always update the updatedAt timestamp
            updateExpressions.push('#updatedAt = :updatedAt');
            expressionAttributeNames['#updatedAt'] = 'updatedAt';
            expressionAttributeValues[':updatedAt'] = new Date().toISOString();

            const params = {
                TableName: tableName,
                Key: key,
                UpdateExpression: `SET ${updateExpressions.join(', ')}`,
                ExpressionAttributeNames: expressionAttributeNames,
                ExpressionAttributeValues: expressionAttributeValues,
                ReturnValues: 'ALL_NEW' as const,
            };

            const response = await this.docClient.send(new UpdateCommand(params));
            return response.Attributes as BookEntity;
        } catch (error) {
            this.logger.error(`Error updating item in ${tableName}:`, error);
            throw error;
        }
    }

    async delete(tableName: string, key: Record<string, any>) {
        try {
            const params = {
                TableName: tableName,
                Key: key,
            };

            await this.docClient.send(new DeleteCommand(params));
            return true;
        } catch (error) {
            this.logger.error(`Error deleting book from ${tableName}:`, error);
            throw error;
        }
    }

    async scan(tableName: string) {
        try {
            const params = {
                TableName: tableName,
            };

            const response = await this.docClient.send(new ScanCommand(params));
            return response.Items as BookEntity[] || [];
        } catch (error) {
            this.logger.error(`Error scanning books from ${tableName}:`, error);
            throw error;
        }
    }

    async query(params: {
        TableName: string;
        IndexName?: string;
        KeyConditionExpression: string;
        ExpressionAttributeValues: Record<string, any>;
    }) {
        try {
            const response = await this.docClient.send(new QueryCommand(params));
            return response.Items || [];
        } catch (error) {
            this.logger.error(
                `Error querying books from ${params.TableName}:`,
                error,
            );
            throw error;
        }
    }
}