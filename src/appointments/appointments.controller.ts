/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Patch, Post, ValidationPipe } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { Roles } from 'src/auth/rol.decorator';
import { AppointmentsDto } from './appointments.dto/appointments.dto';

@Controller('citas')
export class AppointmentsController {
  constructor(private readonly appointmentService: AppointmentsService) {}

  @Post()
  @Roles('user', 'admin', 'doctor')
  async createAppointment(@Body(ValidationPipe) appointmentsDto: AppointmentsDto ) {
    return this.appointmentService.createAppointment(appointmentsDto.datetime, appointmentsDto.userId, appointmentsDto.doctorId);
  }

  @Patch(':id')
  @Roles('doctor')
  async updateStatus(@Body('status') status: string, @Body('id') id: string) {
    return this.appointmentService.updateStatus(id, status);}

  @Delete(':id')
  @Roles('admin', 'user', 'doctor')
  async deleteAppointment(@Body('id') id: string) {
    return this.appointmentService.deleteAppointment(id);
  }

  @Get('all')
  @Roles('admin')
  async findAll() {
    return this.appointmentService.findAll();
  }

}
