import { Module } from '@nestjs/common';
import { ApartmentsModule } from './apartments/apartments.module';
import { DatabaseModule } from './database/database.module';
import { ApartmentsController } from './apartments/apartments.controller';
import { ApartmentsService } from './apartments/apartments.service';

@Module({
  imports: [ApartmentsModule,DatabaseModule],
  controllers: [ApartmentsController],
  providers: [ApartmentsService],
})
export class AppModule {}
