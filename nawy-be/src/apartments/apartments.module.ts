import { Module } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { ApartmentsController } from './apartments.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  //Import DatabaseModule to be able to use the exported ApartmentRepository.
  imports:[DatabaseModule],
  //Register the controllers of this module
  controllers: [ApartmentsController],
  //Register ApartmentsService to be available for dependency injection
  //in the ApartmentsController
  providers: [ApartmentsService],
})
export class ApartmentsModule {}
