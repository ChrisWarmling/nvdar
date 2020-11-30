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
import Categoria from './Categoria';

@Entity('exercicios')
class Exercicio {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  categoria_id: string;

  @ManyToOne(() => Categoria)
  @JoinColumn({ name: 'categoria_id' })
  categ: Categoria;

  @Column()
  nome: string;

  @Column()
  pr_regresao: string;

  @Column()
  sg_regressao: string;

  @Column()
  pr_progressao: string;

  @Column()
  sg_progressao: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Exercicio;
