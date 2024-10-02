import { ApiProperty } from '@nestjs/swagger'
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  Matches,
} from 'class-validator'

export class CreateAuthDto {
  @ApiProperty()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'Username must not contain special characters',
  })
  userName: string

  @ApiProperty()
  // @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty()
  @IsNotEmpty()
  password: string

  @ApiProperty()
  @MinLength(4)
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'Username must not contain special characters',
  })
  firstName: string

  @ApiProperty()
  @MinLength(4)
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'Username must not contain special characters',
  })
  lastName: string
}
