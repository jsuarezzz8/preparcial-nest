/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsPhoneNumber()
  readonly phone: string;

  @IsBoolean()
  @IsNotEmpty()
  readonly is_active: boolean;

  @IsDate()
  @IsNotEmpty()
  readonly created_at: Date;
}
