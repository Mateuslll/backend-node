import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({
    title: "email",
    required: true,
    type: String
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    title: "name",
    required: true,
    type: String
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    title: "middle_name",
    required: true,
    type: String
  })
  @IsNotEmpty()
  @IsString()
  middle_name: string;

  @ApiProperty({
    title: "phone",
    required: false,
    type: String
  })
  @IsOptional()
  @IsPhoneNumber('BR')
  @IsString()
  phone: string;

}
