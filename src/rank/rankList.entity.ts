import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RankList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  ticket: number;

  @Column()
  pid: number;

  @Column({ default: true })
  isActive: boolean;
}
