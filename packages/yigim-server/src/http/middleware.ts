import { APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda';
import { badReqeust } from '../utils/generateResponses';

export type Handler = (
  event: Omit<APIGatewayProxyEvent, 'pathParameters'> & {
    bodyParameters: Record<string, unknown>;
    pathParameters: Record<string, string>;
  },
) => Promise<{
  statusCode: number;
  body: string;
}>;
export const middleware = (handler: Handler): APIGatewayProxyHandler => {
  return async (event, _context) => {
    let bodyParameters: Record<string, unknown> = {};
    try {
      if (event.body) bodyParameters = JSON.parse(event.body);
    } catch (e) {
      return badReqeust('InvalidJsonRequestBody');
    }
    const pathParameters = event.pathParameters ?? {};
    return handler({
      ...event,
      bodyParameters,
      pathParameters,
    });
  };
};
