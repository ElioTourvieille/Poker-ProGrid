import { IsString, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({message: 'Name is required'})
  name: string;

  @IsEnum(['free', 'starter', 'pro', 'premium'], { message: 'Invalid status' })
  status: 'free' | 'starter' | 'pro' | 'premium';
}