import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://rayelissonl:matoseco@aluraray.pfb8ejv.mongodb.net/nestjs'),
    TasksModule,
  ],
  
})
export class AppModule {}
