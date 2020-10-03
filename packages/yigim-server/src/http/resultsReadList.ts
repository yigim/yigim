import dynamoose from 'dynamoose';
import { ResultModel } from '../models/Result';
import { STAGE } from '../constants';
import { middleware } from './middleware';
import { badRequest, ok } from '../utils/generateResponses';

if (STAGE === 'dev') dynamoose.aws.ddb.local();

export const handler = middleware(async (event) => {
  const { pathParameters } = event;
  const { testId } = pathParameters;

  if (!testId) return badRequest('Invalid path parameters', pathParameters);

  const results = await ResultModel.query('testId').eq(testId).exec();
  return ok('results', results);
});
