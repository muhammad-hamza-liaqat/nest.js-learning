import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUrl } from "class-validator";

export class CreateUploadDto {
    @ApiProperty()
    @IsUrl()
    @IsNotEmpty({message: "image URL can not be empty"})
    imageUrl: string
}
