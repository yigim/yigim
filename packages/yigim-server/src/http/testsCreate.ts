import dynamoose from 'dynamoose';
import { customAlphabet } from 'nanoid';
import { TestModel } from '../models/Test';
import { STAGE } from '../constants';
import { middleware } from './middleware';
import { badRequest, ok } from '../utils/generateResponses';

if (STAGE === 'dev') dynamoose.aws.ddb.local();

export const handler = middleware(async (event) => {
  const { test: data } = event.bodyParameters as {
    test: Record<string, unknown>[];
  };

  if (!data) return badRequest('Invalid body parameters', event.bodyParameters);

  const test = await TestModel.create({
    id: `i${customAlphabet('0123456789abcdefg', 6)()}`,
    data,
  });

  return ok('test', test);
});
