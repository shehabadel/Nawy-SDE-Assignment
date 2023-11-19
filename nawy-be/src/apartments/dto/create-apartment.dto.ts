import { IsString, IsNumber, IsArray, IsBoolean, ArrayNotEmpty } from 'class-validator';

export class CreateApartmentDto {
  @IsString()
    name: string;

  @IsString()
    description: string;

  @IsString()
    location: string;

  @IsNumber()
    price: number;

  @IsNumber()
    bedrooms: number;

  @IsNumber()
    bathrooms: number;

  @IsNumber()
    size: number;

  @IsArray()
  @ArrayNotEmpty()
    amenities: string[];

  @IsArray()
  @ArrayNotEmpty()
    photos: string[];

  @IsBoolean()
    available: boolean;
}
