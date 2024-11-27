import { Controller, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './entities/comment';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() commentData: Partial<Comment>): Promise<Comment> {
    return this.commentsService.create(commentData);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Comment>): Promise<any> {
    return this.commentsService.update(+id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    return this.commentsService.remove(+id);
  }
}
