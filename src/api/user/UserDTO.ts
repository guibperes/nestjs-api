import {
  IsNotEmpty,
  Length,
  IsOptional,
  IsEmail,
  IsDateString,
} from 'class-validator';

export class UserCreateDTO {
  @IsNotEmpty()
  @Length(4, 40)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsDateString()
  birthDate: Date;
}

export class UserUpdateDTO {
  @IsOptional()
  @Length(4, 40)
  name: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsDateString()
  birthDate: Date;
}
