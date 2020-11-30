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
import Serie from './Serie';
import Exercicio from './Exercicio';

@Entity('exer_serie')
class ExerSerie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  serie_id: string;

  @ManyToOne(() => Serie)
  @JoinColumn({ name: 'serie_id' })
  serie: Serie;

  @Column()
  exercicio_id: string;

  @ManyToOne(() => Exercicio)
  @JoinColumn({ name: 'exercicio_id' })
  exercicio: Exercicio;

  @Column()
  qtd_repeticoes: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ExerSerie;
