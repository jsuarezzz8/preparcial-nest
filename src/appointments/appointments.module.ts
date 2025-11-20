import { Module } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentsEntity } from './appointments.entity/appointments.entity';
import { AppointmentsController } from './appointments.controller';

@Module({
  providers: [AppointmentsService],
  exports: [AppointmentsService],
  imports: [TypeOrmModule.forFeature([AppointmentsEntity])],
  controllers: [AppointmentsController],
})
export class AppointmentsModule {}
