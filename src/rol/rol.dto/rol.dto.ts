/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {IsNotEmpty, IsString } from 'class-validator';

export class RolDto {
  @IsString()
  @IsNotEmpty()
  readonly rol_name: string;

  @IsString()
  readonly description: string;
}
