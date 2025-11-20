/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(id: string, password: string): Promise<any> {
    const user = await this.userService.findOne(id);
    if (user && user.password == password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
