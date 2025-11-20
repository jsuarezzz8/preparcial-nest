/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { RolEntity } from '../../rol/rol.entity/rol.entity';
import { Exclude } from 'class-transformer';
@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true, nullable: false})
    email: string;

    @Column({nullable: false})
    @Exclude()
    password: string;

    @Column()
    name: string;

    @Column({nullable: true})
    phone: string;

    @Column({default: true})
    is_active: boolean;

    @CreateDateColumn()
    created_at: Date;

    @ManyToMany(() => RolEntity, (role) => role.users, { eager: true })
    @JoinTable({
      name: 'user_roles',
      joinColumn: { name: 'user_id', referencedColumnName: 'id' },
      inverseJoinColumn: { name: 'rol_id', referencedColumnName: 'id' },
    })
    roles: RolEntity[];

}
