import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TaskPriority } from "./task.priority";
import { TaskStatus } from "./task.status";
import { Operation } from "../operation.model";
import { TasksList } from "../tasks.list.model";

@Entity()
export class Task {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string

  @Column({length: 500})
  content: string

  @Column()
  date: Date

  @Column()
  priority: TaskPriority

  @Column()
  status: TaskStatus

  @OneToMany(type => Operation, operation => operation.task)
  history: Operation[]

  @OneToMany(type => TasksList, tasksList => tasksList.tasks)
  list: TasksList

}