import {
    CreateTableCommand,
    DescribeTableCommand,
    DynamoDBClient,
    KeyType,
    ScalarAttributeType
} from "@aws-sdk/client-dynamodb";
import { Logger } from "@nestjs/common";
import * as dotenv from 'dotenv'
dotenv.config();

export class DynamoDBTableCreator {
    private readonly logger = new Logger(DynamoDBTableCreator.name);
    private client: DynamoDBClient;

    constructor() {
        this.client = new DynamoDBClient({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
            }
        })
    }

    async createBookTable() {
        const tableName = 'Books';
        try {
            await this.describeTable(tableName);
            this.logger.log(`Table ${tableName} already exists`);
            return;
        } catch (err: any) {
            try {
                const params = {
                    TableName: tableName,
                    KeySchema: [
                        { AttributeName: 'id', KeyType: KeyType.HASH } // Partition key
                    ],
                    AttributeDefinitions: [
                        {
                            AttributeName: 'id',
                            AttributeType: ScalarAttributeType.S
                        }
                    ],
                    ProvisionedThroughput: {
                        ReadCapacityUnits: 5,
                        WriteCapacityUnits: 5
                    }
                };
                const command = new CreateTableCommand(params);
                const response = await this.client.send(command);
                this.logger.log(`Table ${tableName} created successfully`);
                return response;
            } catch (createError: any) {
                this.logger.error(`Error creating table ${tableName}:`, createError);
                throw createError;
            }
        }
    }

    async createReservationTable() {
        const tableName = 'Reservation';
        try {
            await this.describeTable(tableName);
            this.logger.log(`Table ${tableName} already exists`);
            return;
        } catch (err: any) {
            try {
                const params = {
                    TableName: tableName,
                    KeySchema: [
                        { AttributeName: 'id', KeyType: KeyType.HASH } // Partition key
                    ],
                    AttributeDefinitions: [
                        {
                            AttributeName: 'id',
                            AttributeType: ScalarAttributeType.S
                        }
                    ],
                    ProvisionedThroughput: {
                        ReadCapacityUnits: 5,
                        WriteCapacityUnits: 5
                    }
                };
                const command = new CreateTableCommand(params);
                const response = await this.client.send(command);
                this.logger.log(`Table ${tableName} created successfully`);
                return response;
            } catch (createError: any) {
                this.logger.error(`Error creating table ${tableName}:`, createError);
                throw createError;
            }
        }
    }

    private async describeTable(tableName: string) {
        const command = new DescribeTableCommand({ TableName: tableName });
        return this.client.send(command);
    }
}