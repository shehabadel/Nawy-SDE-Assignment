import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApartmentRepository } from './models/apartment/apartment.repository';
import { Apartment, ApartmentSchema } from './models/apartment/apartment.schema';
/**
 * Database module that will be imported in the root AppModule
 */
@Module({
    imports:[
        //Configuring connecting to MongoDB 
        MongooseModule.forRoot(process.env.MONGODB),
        //Register Apartment model with its associated schema
        MongooseModule.forFeature([
            {name:Apartment.name, schema:ApartmentSchema}
        ])
    ],
    //ApartmentRepository is available for dependency injection
    //where it can be injected into other classes or services
    //within the DatabaseModule.
    providers:[
        ApartmentRepository
    ],
    //Other modules that import the DatabseModule in the system
    //can use ApartmentRepository.
    exports:[
        ApartmentRepository
    ]
})
export class DatabaseModule{}