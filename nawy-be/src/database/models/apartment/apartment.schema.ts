import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

//Marks the below class as a schema definition to a MongoDB collection
@Schema()
export class Apartment{
    @Prop({ required: true })
    name: string;
  
    @Prop({ required: true })
    description: string;
  
    @Prop({ required: true })
    location: string;
  
    @Prop({ required: true })
    price: number;
  
    @Prop({ required: true })
    bedrooms: number;
  
    @Prop({ required: true })
    bathrooms: number;
  
    @Prop({ required: true })
    size: number;
  
    @Prop({ type: [String], default: [] })
    amenities: string[];
  
    @Prop({ type: [String], default: [] })
    photos: string[];
  
    @Prop({ default: true })
    available: boolean;
}
export const ApartmentSchema = SchemaFactory.createForClass(Apartment);
