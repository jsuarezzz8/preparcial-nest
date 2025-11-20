/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  ConflictException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolEntity } from './rol.entity/rol.entity';
import { RolDto } from './rol.dto/rol.dto';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(RolEntity)
    private roleRepository: Repository<RolEntity>,
  ) {}

  async create(createRoleDto: RolDto) {
    const { role_name, description } = createRoleDto;
    if (!role_name) {
      throw new BadRequestException('role_name es requerido');
    }
    const existingRole = await this.roleRepository.findOne({
      where: { role_name },
    });
    if (existingRole) {
      throw new ConflictException('role_name ya existe');
    }
    const role = this.roleRepository.create({ role_name, description });
    const savedRole = await this.roleRepository.save(role);

    return {
      message: 'Rol creado con éxito',
      roleId: savedRole.id,
    };
  }

  async findAll() {
    try {
      const roles = await this.roleRepository.find();
      return roles.map((role) => ({
        id: role.id,
        role_name: role.role_name,
        description: role.description,
      }));
    } catch (error) {
      throw new InternalServerErrorException('Error al obtener roles');
    }
  }
}
