import { APIGatewayProxyHandler } from 'aws-lambda';
import dynamoose from 'dynamoose';
import { ResultModel } from '../models/Result';
import { TestModel } from '../models/Test';
import { STAGE } from '../constants';

if (STAGE === 'dev') dynamoose.aws.ddb.local();

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const { id, data } = JSON.parse(event.body!);
  const { testId } = event.pathParameters!;

  if (!id || !data) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: 'Bad Request: id or data are undefined inrequest body',
    };
  }

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

  const result = await ResultModel.create({ testId, id, data });
  return {
    statusCode: 200,
    Headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(result),
  };
};
