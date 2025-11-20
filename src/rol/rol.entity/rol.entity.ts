/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../../user/user.entity/user.entity";

@Entity('rol')
export class RolEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    role_name: string;

    @Column({nullable: true})
    description: string;

    @ManyToMany(() => UserEntity, user => user.roles)
    @JoinTable()
    users: UserEntity[];
}
