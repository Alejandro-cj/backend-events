import { Controller, Get, Post, Patch, Param, Body, Delete } from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from './entities/event';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() eventData: Partial<Event>): Promise<Event> {
    return this.eventsService.create(eventData);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Event> {
    return this.eventsService.findOne(+id);
  }

  @Get()
  findAll(): Promise<Event[]> {
    return this.eventsService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Event>): Promise<any> {
    return this.eventsService.update(+id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    return this.eventsService.remove(+id);
  }
}
