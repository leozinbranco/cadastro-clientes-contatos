import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(private prismaService: PrismaService) {}

  create(createClienteDto: CreateClienteDto) {
    return this.prismaService.clientes.create({
      data: createClienteDto,
    });
  }

  findAll() {
    return this.prismaService.clientes.findMany();
  }

  findOne(id: number) {
    return this.prismaService.clientes.findFirstOrThrow({ where: { id: id } });
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return this.prismaService.clientes.update({
      where: { id: id },
      data: updateClienteDto,
    });
  }

  remove(id: number) {
    return this.prismaService.clientes.delete({ where: { id: id } });
  }
}
