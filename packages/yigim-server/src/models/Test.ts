import { Schema, model } from 'dynamoose';
import { Document } from 'dynamoose/dist/Document';

export interface ITest extends Document {
  id: string;
  name: string;
  problems: unknown[];
}
const schema = new Schema(
  {
    id: { type: String, hashKey: true },
    name: String,
    problems: { type: Array },
  },
  { saveUnknown: ['problems.**'] },
);

export const TestModel = model<ITest>('test', schema);
