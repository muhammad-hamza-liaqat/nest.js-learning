import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({timestamps: true })
export class User {
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  age: number;
}

export const userSchema = SchemaFactory.createForClass(User);
export type userDocument = User & Document;
