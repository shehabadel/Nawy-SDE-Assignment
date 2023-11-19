import { Injectable } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { ApartmentRepository } from '../database/models/apartment/apartment.repository';

@Injectable()
export class ApartmentsService {
  constructor(
    private apartmentRepository:ApartmentRepository
  ){}
  async create(createApartmentDto: CreateApartmentDto) {
    return this.apartmentRepository.createOne(createApartmentDto);
  }

  async findAll() {
    return this.apartmentRepository.find({})
  }

  async findOne(id: string) {
    return await this.apartmentRepository.findOne(id)
  }

  async update(id: string, updateApartmentDto: UpdateApartmentDto) {
    return await this.apartmentRepository.updateOne({id:id, doc:updateApartmentDto})
  }

  async remove(id: string) {
    return await this.apartmentRepository.deleteOne(id)
  }
}
