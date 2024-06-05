import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';
@Entity()
export class Problems {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column({
        default: false
    })
    finished: boolean;
    @Column()
    location: string;
    @CreateDateColumn()
    create_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
}