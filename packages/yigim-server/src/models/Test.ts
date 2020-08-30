import { Schema, model } from 'dynamoose';
import { Document } from 'dynamoose/dist/Document';

export interface ITest extends Document {
  id: string;
  data: Object[];
}
const schema = new Schema(
  {
    id: String,
    data: { type: Array },
  },
  { saveUnknown: ['data.**'] },
);

export const TestModel = model<ITest>('test', schema);
