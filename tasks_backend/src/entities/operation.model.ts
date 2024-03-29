import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./task/task.model";


@Entity()
export class Operation {

  @PrimaryGeneratedColumn()
  id:number;

  @Column({length: 500})
  action:string

  @Column()
  dateTime:Date;

  @OneToMany(type => Task, task => task.history)
  task: Task

}