/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { AppointmentsEntity } from './appointments.entity/appointments.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from './appointments.entity/status.enum';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(AppointmentsEntity)
    private readonly appointmentRepository: Repository<AppointmentsEntity>,
  ) {}

  async createAppointment(datetime: Date, userId: string, doctorId: string): Promise<AppointmentsEntity> {
    const appointment = this.appointmentRepository.create({
      datetime,
      user: { id: userId },
      doctor: { id: doctorId },
      status: Status.PENDING,
    });
    return this.appointmentRepository.save(appointment);
  }

  async findAll(): Promise<AppointmentsEntity[]> {
    return this.appointmentRepository.find({ relations: ['user'] });
  }

  async updateStatus(appointmentId: string, status: string): Promise<AppointmentsEntity> {
    const appointment = await this.appointmentRepository.findOne({ where: { id: appointmentId } });
    if (!appointment) {
      throw new Error('Appointment not found');
    }
    if ( status !== 'DONE' && status !== 'CANCELLED' && status == Status.PENDING ) {
        throw new Error('Invalid status value');
    }

    appointment.status = Status[status as keyof typeof Status];
    return this.appointmentRepository.save(appointment);
  
}

    async deleteAppointment(appointmentId: string): Promise<void> {
        await this.appointmentRepository.delete(appointmentId);
  }
}