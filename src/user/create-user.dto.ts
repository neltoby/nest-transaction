import { Length, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(2, 50)
  readonly firstName: string;

  @IsNotEmpty()
  @Length(2, 50)
  readonly lastName: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
}
