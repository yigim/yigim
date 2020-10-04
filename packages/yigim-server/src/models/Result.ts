import { Schema, model } from 'dynamoose';
import { Document } from 'dynamoose/dist/Document';

export interface IResult extends Document {
  testId: string;
  id: string;
  name: string;
  data: Record<string, unknown>[];
}
const schema = new Schema(
  {
    testId: String,
    id: { type: String, rangeKey: true },
    name: String,
    data: { type: Array },
  },
  { saveUnknown: ['data.**'] },
);

export const ResultModel = model<IResult>('result', schema);
