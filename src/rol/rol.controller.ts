import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/rol.guard';
import { RolService } from './rol.service';
import { RolDto } from './rol.dto/rol.dto';
import { Roles } from 'src/auth/rol.decorator';

@Controller('roles')
@UseGuards(JwtAuthGuard, RolesGuard)
export class RolController {
  constructor(private rolesService: RolService) {}
  @Post()
  @Roles('admin')
  async create(@Body(ValidationPipe) createRoleDto: RolDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  @Roles('admin')
  async findAll() {
    return this.rolesService.findAll();
  }
}
