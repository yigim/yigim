import { APIGatewayProxyHandler } from 'aws-lambda';
import dynamoose from 'dynamoose';
import { TestModel } from '../models/Test';
import { STAGE } from '../constants';

if (STAGE === 'dev') dynamoose.aws.ddb.local();

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const { testId } = event.pathParameters!;

  if (!testId) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: 'Bad Request: testId is undefined in path parameters',
    };
  }
  const test = await TestModel.get(testId);

  if (!test)
    return {
      statusCode: 404,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: 'Not found: test',
    };

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(test),
  };
};
