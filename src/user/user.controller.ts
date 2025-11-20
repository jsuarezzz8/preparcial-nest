/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/rol.guard';
import { UserService } from './user.service';
import { Roles } from 'src/auth/rol.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserController {
  constructor(private usersService: UserService) {}
  @Get('me')
  async getProfile(@Request() req) {
    return this.usersService.getProfile(req.user.id);
  }
  @Get()
  @Roles('admin')
  async findAll() {
    return this.usersService.findAll();
  }
}
