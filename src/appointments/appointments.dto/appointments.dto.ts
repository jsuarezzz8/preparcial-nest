import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class AppointmentsDto {
  @IsDate()
  @IsNotEmpty({ message: 'datetime es requerido' })
  datetime: Date;

  @IsString()
  @IsNotEmpty({ message: 'Id del paciente es requerido' })
  userId: string;

  @IsString()
  @IsNotEmpty({ message: 'Id del doctor es requerido' })
  doctorId: string;
}
