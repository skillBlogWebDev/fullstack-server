import { IsNotEmpty, IsBoolean } from 'class-validator';

export class ChangeTodo {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly done: boolean;
}