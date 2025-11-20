/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany } from 'typeorm';
import { RolEntity } from '../../rol/rol.entity/rol.entity';
@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false})
    email: string;

    @Column({nullable: false})
    password: string;

    @Column()
    name: string;

    @Column({nullable: true})
    phone: string;

    @Column({default: true})
    is_active: boolean;

    @CreateDateColumn({ 
      name: 'created_at',
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP'
    })
    created_at: Date;

    @ManyToMany(() => RolEntity, rol => rol.users)
    roles: RolEntity[];

}
