import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user';
import { Category } from '../../categories/entities/category';
import { Comment } from '../../comments/entities/comment';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @ManyToMany(() => User, (user) => user.events)
  attendees: User[];

  @ManyToMany(() => Category, (category) => category.events)
  @JoinTable()
  categories: Category[];

  @OneToMany(() => Comment, (comment) => comment.event)
  comments: Comment[];
}
