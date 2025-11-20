/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolEntity } from './rol.entity/rol.entity';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(RolEntity)
    private readonly rolRepository: Repository<RolEntity>,
  ) {}

  async findAll(): Promise<RolEntity[]> {
    return await this.rolRepository.find({ relations: ['users'] });
  }

  async findOne(id: string): Promise<RolEntity> {
    const rol: RolEntity | null = await this.rolRepository.findOne({
      where: { id },
      relations: ["roles"],
    });
    if (!rol)
      throw new BusinessLogicException('Rol with the given id was not found', BusinessError.NOT_FOUND);
    return rol;
  }

  async create(rol: RolEntity): Promise<RolEntity> {
    return await this.rolRepository.save(rol);
  }

  async update(id: string, rol: RolEntity): Promise<RolEntity> {
    const persistedRol: RolEntity | null = await this.rolRepository.findOne({ where: {id}});
      if (!persistedRol)
        throw new BusinessLogicException("The rol with the given id was not found", BusinessError.NOT_FOUND);
      return await this.rolRepository.save({...persistedRol, ...rol})
  }

  async delete(id: string) {
       const rol: RolEntity | null= await this.rolRepository.findOne({where:{id}});
       if (!rol)
         throw new BusinessLogicException("The rol with the given id was not found", BusinessError.NOT_FOUND);
    
       await this.rolRepository.remove(rol);
   }
}
