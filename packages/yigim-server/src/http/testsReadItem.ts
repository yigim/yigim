import dynamoose from 'dynamoose';
import { TestModel } from '../models/Test';
import { STAGE } from '../constants';
import { badRequest, notFound, ok } from '../utils/generateResponses';
import { middleware } from './middleware';

if (STAGE === 'dev') dynamoose.aws.ddb.local();

export const handler = middleware(async (event) => {
  const { testId } = event.pathParameters;

  if (!testId)
    return badRequest('Invalid path parameters', event.pathParameters);

  const test = await TestModel.get(testId);

  if (!test) return notFound('Test not found');

  return ok('test', test);
});
