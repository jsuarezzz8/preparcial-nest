import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RolModule } from './rol/rol.module';
import { UserEntity } from './user/user.entity/user.entity';
import { RolEntity } from './rol/rol.entity/rol.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AppointmentsModule } from './appointments/appointments.module';
import { AppointmentsEntity } from './appointments/appointments.entity/appointments.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    RolModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'preparcialdb',
      entities: [UserEntity, RolEntity, AppointmentsEntity],
      dropSchema: true,
      synchronize: true,
    }),
    AuthModule,
    AppointmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
