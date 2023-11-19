import { InjectModel } from "@nestjs/mongoose";
import { BaseRepository } from "../base.repository";
import { Apartment } from "./apartment.schema";
import { Injectable } from "@nestjs/common/decorators";
import { Model } from "mongoose";

@Injectable()
export class ApartmentRepository extends BaseRepository<Apartment>{
    constructor(
        @InjectModel(Apartment.name)
        private readonly nModel: Model<Apartment>
    ){
        super(nModel)
    }
}