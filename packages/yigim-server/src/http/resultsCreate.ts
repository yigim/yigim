import dynamoose from 'dynamoose';
import { ResultModel } from '../models/Result';
import { TestModel } from '../models/Test';
import { STAGE } from '../constants';
import { middleware } from './middleware';
import { badRequest, notFound, ok } from '../utils/generateResponses';

if (STAGE === 'dev') dynamoose.aws.ddb.local();

export const handler = middleware(async (event) => {
  const { id, data } = event.bodyParameters as {
    id: string;
    data: Record<string, unknown>[];
  };
  const { testId } = event.pathParameters;

  if (!id || !data)
    return badRequest('Invalid body parameters', event.bodyParameters);

  if (!testId)
    return badRequest('Invalid path parameters', event.pathParameters);

  const test = await TestModel.get(testId);
  if (!test) return notFound('Test not found');

  const result = await ResultModel.create({ testId, id, data });
  return ok('result', result);
});
