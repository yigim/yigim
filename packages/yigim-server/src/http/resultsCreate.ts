import { APIGatewayProxyHandler } from 'aws-lambda';
import dynamoose from 'dynamoose';
import { ResultModel } from '../models/Result';
import { TestModel } from '../models/Test';

dynamoose.aws.ddb.local();

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const { id, data } = JSON.parse(event.body!);

  const { testId } = event.pathParameters!;

  const test = await TestModel.get(testId);
  if (!test) throw Error('Test model not found.');

  const result = await ResultModel.create({ testId, id, data });
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};