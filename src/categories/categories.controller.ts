import { Controller, Post, Get, Patch, Param, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() categoryData: Partial<Category>): Promise<Category> {
    return this.categoriesService.create(categoryData);
  }

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Category>): Promise<any> {
    return this.categoriesService.update(+id, updateData);
  }
}
