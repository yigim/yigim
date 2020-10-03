import { Schema, model } from 'dynamoose';
import { Document } from 'dynamoose/dist/Document';

export interface ITest extends Document {
  id: string;
  data: Record<string, unknown>[];
}
const schema = new Schema(
  {
    id: { type: String, hashKey: true },
    data: { type: Array },
  },
  { saveUnknown: ['data.**'] },
);

export const TestModel = model<ITest>('test', schema);
