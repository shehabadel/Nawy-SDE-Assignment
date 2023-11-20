import { InjectModel } from "@nestjs/mongoose";
import { BaseRepository } from "../base.repository";
import { Apartment } from "./apartment.schema";
import { Injectable } from "@nestjs/common/decorators";
import { Model } from "mongoose";

@Injectable()
export class ApartmentRepository extends BaseRepository<Apartment>{
    constructor(
        //Injecting the Apartment model that we registered in the DatabaseModule
        //and pass the Model of type Apartment schema to the Base class
        //to be able to use the Mongoose model and associated methods.
        @InjectModel(Apartment.name)
        private readonly nModel: Model<Apartment>
    ){
        super(nModel)
    }
}