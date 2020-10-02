import { Schema, model } from 'dynamoose';
import { Document } from 'dynamoose/dist/Document';

export interface IResult extends Document {
  id: string;
  testId: string;
  data: Record<string, unknown>[];
}
const schema = new Schema(
  {
    testId: String,
    id: { type: String, rangeKey: true },
    data: { type: Array },
  },
  { saveUnknown: ['data.**'] },
);

export const ResultModel = model<IResult>('result', schema);
