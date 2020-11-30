/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Dia from './Dia';

@Entity('series')
class Serie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  data_id: string;

  @ManyToOne(() => Dia)
  @JoinColumn({ name: 'data_id' })
  data: Dia;

  @Column()
  ordem: number;

  @Column()
  qtd_serie: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Serie;
