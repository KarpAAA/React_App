import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "./entities/task/task.model";
import { TasksList } from "./entities/tasks.list.model";
import { Operation } from "./entities/operation.model";

@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'tasks_db',
    entities: [Task,TasksList,Operation],
    synchronize: true,
  }),

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
