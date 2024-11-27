import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, JoinTable } from 'typeorm';
import { Event } from '../../events/entities/event';
import { Comment } from '../../comments/entities/comment';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @ManyToMany(() => Event, (event) => event.attendees)
  @JoinTable()
  events: Event[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
