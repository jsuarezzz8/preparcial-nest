import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class UserRolDto {
  @IsArray()
  @IsNotEmpty()
  @IsString({ each: true })
  roles: string[];
}
