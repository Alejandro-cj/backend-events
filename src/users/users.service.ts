import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id },
      relations: ['events'], // Incluye relaciones
    });
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: ['events'] });
  }

  update(id: number, updateData: Partial<User>): Promise<any> {
    return this.userRepository.update(id, updateData);
  }

  remove(id: number): Promise<any> {
    return this.userRepository.delete(id);
  }
}
