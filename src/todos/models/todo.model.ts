import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class Todo extends Model {
  @Column
  title: string;

  @Column({ defaultValue: false })
  done: boolean;
}
