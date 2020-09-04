import { APIGatewayProxyHandler } from 'aws-lambda';
import dynamoose from 'dynamoose';
import { customAlphabet } from 'nanoid';
import { TestModel } from '../models/Test';
import { STAGE } from '../constants';

if (STAGE === 'dev') dynamoose.aws.ddb.local();

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const { data } = JSON.parse(event.body!);

  const test = await TestModel.create({ id: customAlphabet('0123456789abcdefg', 10)(), data });

  return {
    statusCode: 200,
    body: JSON.stringify(test),
  };
};
