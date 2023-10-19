import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
export class UsuariosService {
  private readonly users = [
    {
      userId: 1,
      username: 'usuario-teste',
      password: 'teste123',
    },
    {
      userId: 2,
      username: 'outroUsuario',
      password: 'outraSenha',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
