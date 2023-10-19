import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { ContatosService } from './contatos.service';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('contatos')
export class ContatosController {
  constructor(private readonly contatosService: ContatosService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createContatoDto: CreateContatoDto) {
    return this.contatosService.create(createContatoDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.contatosService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contatosService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Get('by-client/:id')
  findContactsByClientId(@Param('id') id: string) {
    console.log('CHEGOU BY CLIENT', id);
    return this.contatosService.findByClientId(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContatoDto: UpdateContatoDto) {
    return this.contatosService.update(+id, updateContatoDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contatosService.remove(+id);
  }
}
