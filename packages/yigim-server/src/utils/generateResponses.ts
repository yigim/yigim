import { APIGatewayProxyResult } from 'aws-lambda';

export const ok = (dataKey: string, data: unknown): APIGatewayProxyResult => ({
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  body: JSON.stringify({ [dataKey]: data }),
});

export const badReqeust = (
  message: string,
  details?: Record<string, unknown>,
): APIGatewayProxyResult => ({
  statusCode: 400,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  body: JSON.stringify({ message, details }),
});

export const notFound = (
  message: string,
  details?: Record<string, unknown>,
): APIGatewayProxyResult => ({
  statusCode: 404,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  body: JSON.stringify({ message, details }),
});
