import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateHelloDTO } from './dto/createHello.dto';
import { UpdateHelloDTO } from './dto/updatehello.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createHello(@Body() data: CreateHelloDTO): string {
  return this.appService.createHello(data);
}

@Put(':id')
updateHello(
  @Param('id, ParseIntPipe') id: number,
  @Body() data: UpdateHelloDTO,
): string {
  return this.appService.updateHello(id, data);
}
}

