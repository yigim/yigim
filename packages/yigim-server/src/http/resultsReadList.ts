import { APIGatewayProxyHandler } from 'aws-lambda';
import dynamoose from 'dynamoose';
import { ResultModel } from '../models/Result';

dynamoose.aws.ddb.local();

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const { testId } = event.pathParameters!;
  const results = await ResultModel.query('testId').eq(testId).exec();
  return {
    statusCode: 200,
    body: JSON.stringify(results),
  };
};
