import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiProperty()
  userName: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
