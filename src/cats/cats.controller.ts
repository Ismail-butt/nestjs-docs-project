import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { CreateCatDto, createCatSchema } from './dto/cats.dto';
import { ZodValidationPipe } from 'src/common/pipes/zodValidation.pipe';
import { TimeoutInterceptor } from 'src/common/interceptors/timeout.interceptor';

@UseGuards(RolesGuard)
@UseInterceptors(TimeoutInterceptor)
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @Roles(['admin'])
  @UsePipes(new ZodValidationPipe(createCatSchema))
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
