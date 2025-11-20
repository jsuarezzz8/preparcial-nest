import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class UserRolDto {
  @IsArray({ message: 'roles debe ser un array' })
  @IsNotEmpty({ message: 'roles es requerido' })
  @IsString({ each: true, message: 'Cada rol debe ser un string' })
  roles: string[];
}
