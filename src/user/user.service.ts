/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity/user.entity';
import { RolEntity } from 'src/rol/rol.entity/rol.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async getProfile(userId: string) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['roles'],
    });
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      roles: user.roles.map((role) => ({
        id: role.id,
        role_name: role.role_name,
        description: role.description,
      })),
    };
  }

  async findAll() {
    try {
      const users = await this.userRepository.find({
        relations: ['roles'],
      });
      return users.map((user) => ({
        id: user.id,
        email: user.email,
        name: user.name,
        roles: user.roles.map((role) => ({
          id: role.id,
          role_name: role.role_name,
          description: role.description,
        })),
      }));
    } catch (error) {
      throw new InternalServerErrorException('Error al listar usuarios');
    }
  }
}
