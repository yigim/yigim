import dynamoose from 'dynamoose';
import { customAlphabet } from 'nanoid';
import { TestModel } from '../models/Test';
import { STAGE } from '../constants';
import { middleware } from './middleware';
import { badReqeust, ok } from '../utils/generateResponses';

if (STAGE === 'dev') dynamoose.aws.ddb.local();

export const handler = middleware(async (event) => {
  const { test: data } = event.bodyParameters as {
    test: Record<string, unknown>[];
  };

  if (!data) return badReqeust('Invalid body parameters', event.bodyParameters);

  const test = await TestModel.create({
    id: customAlphabet('0123456789abcdefg', 10)(),
    data,
  });

  return ok('test', test);
});
