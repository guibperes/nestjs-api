import { IsNotEmpty, IsNumber, IsOptional, Length, Min } from 'class-validator';

export class BookCreateDTO {
  @IsNotEmpty()
  @Length(4, 40)
  title: string;

  @IsOptional()
  @Length(4, 255)
  description: string;

  @IsNumber()
  @Min(1)
  pages: number;
}

export class BookUpdateDTO {
  @IsOptional()
  @Length(4, 40)
  title: string;

  @IsOptional()
  @Length(4, 255)
  description: string;

  @IsOptional()
  @Min(1)
  pages: number;
}
