import dynamoose from 'dynamoose';
import { ResultModel } from '../models/Result';
import { STAGE } from '../constants';
import { middleware } from './middleware';
import { badReqeust, ok } from '../utils/generateResponses';

if (STAGE === 'dev') dynamoose.aws.ddb.local();

export const handler = middleware(async (event) => {
  const { testId } = event.pathParameters;

  if (!testId)
    return badReqeust('Invalid path parameters', event.pathParameters);

  const results = await ResultModel.query('testId').eq(testId).exec();

  return ok('results', results);
});
