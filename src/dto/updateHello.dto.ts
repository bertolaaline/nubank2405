import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateHelloDTO } from './createHello.dto';

export class UpdateHelloDTO extends PartialType(
  OmitType(CreateHelloDTO, [] as const),
) {}