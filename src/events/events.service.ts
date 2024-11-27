import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entities/event';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  create(eventData: Partial<Event>): Promise<Event> {
    const event = this.eventRepository.create(eventData);
    return this.eventRepository.save(event);
  }

  findOne(id: number): Promise<Event> {
    return this.eventRepository.findOne({
      where: { id },
      relations: ['attendees', 'categories', 'comments'], // Relaciones necesarias
    });
  }

  findAll(): Promise<Event[]> {
    return this.eventRepository.find({
      relations: ['attendees', 'categories'],
    });
  }

  update(id: number, updateData: Partial<Event>): Promise<any> {
    return this.eventRepository.update(id, updateData);
  }

  remove(id: number): Promise<any> {
    return this.eventRepository.delete(id);
  }
}
