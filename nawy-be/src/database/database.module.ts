import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApartmentRepository } from './models/apartment/apartment.repository';
import { Apartment, ApartmentSchema } from './models/apartment/apartment.schema';
@Module({
    imports:[
        MongooseModule.forRoot(process.env.MONGODB),
        MongooseModule.forFeature([
            {name:Apartment.name, schema:ApartmentSchema}
        ])
    ],
    providers:[
        ApartmentRepository
    ],
    exports:[
        ApartmentRepository
    ]
})
export class DatabaseModule{}