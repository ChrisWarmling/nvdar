import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateExerSerie1605426190294
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'exer_serie',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'serie_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'exercicio_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'qtd_repeticoes',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'exer_serie',
      new TableForeignKey({
        name: 'Serie',
        columnNames: ['serie_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'series',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'exer_serie',
      new TableForeignKey({
        name: 'Exer',
        columnNames: ['exercicio_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'exercicios',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('exer_serie', 'Serie');
    await queryRunner.dropForeignKey('exer_serie', 'Exer');
    await queryRunner.dropTable('exer_serie');
  }
}
