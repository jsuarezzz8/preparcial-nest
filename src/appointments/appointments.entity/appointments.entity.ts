/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Status } from './status.enum';
import { UserEntity } from 'src/user/user.entity/user.entity';

@Entity('appointments')
export class AppointmentsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  datetime: Date;

  @Column()
  status: Status;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => UserEntity, { nullable: false })
  user: UserEntity;

  @ManyToOne(() => UserEntity, { nullable: false })
  doctor: UserEntity;
}
