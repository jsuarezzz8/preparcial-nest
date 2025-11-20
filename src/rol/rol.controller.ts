/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { RolService } from './rol.service';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors/business-errors.interceptor';
import { RolDto } from './rol.dto/rol.dto';
import { RolEntity } from './rol.entity/rol.entity';
import { plainToInstance } from 'class-transformer';

@Controller('rol')
@UseInterceptors(BusinessErrorsInterceptor)
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Post('roles')
  async create(@Body() rolDto: RolDto) {
    const rol: RolEntity = plainToInstance(RolEntity, rolDto);
    return await this.rolService.create(rol);
  }

  @Get('roles')
  async findAll() {
    return await this.rolService.findAll();
  }
}
