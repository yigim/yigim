import dynamoose from 'dynamoose';
import { customAlphabet } from 'nanoid';
import { TestModel } from '../models/Test';
import { STAGE } from '../constants';
import { middleware } from './middleware';
import { badRequest, ok } from '../utils/generateResponses';

if (STAGE === 'dev') dynamoose.aws.ddb.local();

export const handler = middleware(async (event) => {
  const { name, problems } = event.bodyParameters as {
    name: string;
    problems: unknown[];
  };

  if (!problems || problems.length === 0)
    return badRequest('Invalid body parameters', event.bodyParameters);

  const test = await TestModel.create({
    id: customAlphabet('0123456789abcdefg', 6)(),
    name,
    problems,
  });

  return ok('test', test);
});
