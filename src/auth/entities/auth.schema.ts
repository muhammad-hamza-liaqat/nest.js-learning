import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 

@Schema({ timestamps: true })
export class Auth {
  @Prop()
  userName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;
}

// Creating schema
export const authSchema = SchemaFactory.createForClass(Auth);

// Creating type for "Document of Auth"
export type authDocument = Auth & Document;
