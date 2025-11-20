/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { RolService } from './rol.service';
import { Repository } from 'typeorm';
import { RolEntity } from './rol.entity/rol.entity';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('RolService', () => {
  let service: RolService;
  let repository: Repository<RolEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [RolService],
    }).compile();

    service = module.get<RolService>(RolService);
    repository = module.get<Repository<RolEntity>>(
      getRepositoryToken(RolEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
