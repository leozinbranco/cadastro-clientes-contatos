import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';

@Injectable()
export class ContatosService {
  constructor(private prismaService: PrismaService) {}
  create(createContatoDto: CreateContatoDto) {
    return this.prismaService.contatos.create({
      data: createContatoDto,
    });
  }

  findAll() {
    return this.prismaService.contatos.findMany();
  }

  findByClientId(id: number) {
    return this.prismaService.contatos.findMany({
      where: { clientesId: id },
    });
  }

  findOne(id: number) {
    return this.prismaService.contatos.findUnique({ where: { id: id } });
  }

  update(id: number, updateContatoDto: UpdateContatoDto) {
    return this.prismaService.contatos.update({
      where: { id },
      data: updateContatoDto,
    });
  }

  remove(id: number) {
    return this.prismaService.contatos.delete({ where: { id: id } });
  }
}
