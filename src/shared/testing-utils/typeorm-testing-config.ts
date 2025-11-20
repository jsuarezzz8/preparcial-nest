/* eslint-disable prettier/prettier */

import { TypeOrmModule } from "@nestjs/typeorm";
import { RolEntity } from "../../rol/rol.entity/rol.entity";
import { UserEntity } from "../../user/user.entity/user.entity";


export const TypeOrmTestingConfig = () => [
 TypeOrmModule.forRoot({
   type: 'sqlite',
   database: ':memory:',
   dropSchema: true,
   entities: [UserEntity, RolEntity],
   synchronize: true,
 }),
 TypeOrmModule.forFeature([UserEntity, RolEntity]),
];