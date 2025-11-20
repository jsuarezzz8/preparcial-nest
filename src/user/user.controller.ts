import { Body, Controller, Get, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors/business-errors.interceptor';

@Controller('user')
@UseInterceptors(BusinessErrorsInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async findAll() {
    return await this.userService.findAll();
  }
}
