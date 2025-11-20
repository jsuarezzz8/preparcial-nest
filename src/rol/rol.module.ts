import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolEntity } from './rol.entity/rol.entity';
import { RolController } from './rol.controller';

@Module({
  providers: [RolService],
  imports: [TypeOrmModule.forFeature([RolEntity])],
  controllers: [RolController],
})
export class RolModule {}
