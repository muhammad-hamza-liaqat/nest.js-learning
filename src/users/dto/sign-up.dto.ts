import { ApiProperty } from '@nestjs/swagger';

export class signUpDTO {
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  age: number;
}
