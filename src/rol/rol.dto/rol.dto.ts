import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class RolDto {
  @IsString()
  @IsNotEmpty({ message: 'role_name es requerido' })
  role_name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
