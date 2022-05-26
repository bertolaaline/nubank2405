import { IsEmail, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";

export class UpdateHelloDTO {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumberString()
  @IsOptional()
  age?: number;

  @IsString()
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsString()
  @IsOptional()
  address?: string;

}