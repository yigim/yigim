import { APIGatewayProxyHandler } from 'aws-lambda';
import dynamoose from 'dynamoose';
import { TestModel } from '../models/Test';

dynamoose.aws.ddb.local();

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const { testId } = event.pathParameters!;
  const test = await TestModel.get(testId);
  return {
    statusCode: 200,
    body: JSON.stringify(test),
  };
};