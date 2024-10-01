import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class AuthSchema {
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

// making schema
export const authSchema = SchemaFactory.createForClass(AuthSchema);
// making type "Document of authSchema"
export type authDocument = AuthSchema & Document;
