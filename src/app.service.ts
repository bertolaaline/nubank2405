import { Injectable } from '@nestjs/common';
import { CreateHelloDTO } from './dto/createHello.dto';
import { UpdateHelloDTO } from './dto/updatehello.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createHello(data: CreateHelloDTO): string {
    return `Hello ${data.name.toUpperCase()}`;
  }

  updateHello(id:number, data: UpdateHelloDTO): string {
    return `Update ${data.name.toUpperCase()}`;
  }
}

