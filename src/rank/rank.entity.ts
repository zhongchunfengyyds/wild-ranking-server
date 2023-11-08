import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { RankList } from './rankList.entity';

@Entity()
export class Rank {
  @PrimaryGeneratedColumn()
  @OneToMany((type) => RankList, (rankList) => rankList.pid)
  id: number;

  @Column()
  title: string;

  @Column({ default: true })
  isActive: boolean;

  list?: RankList[];
}
