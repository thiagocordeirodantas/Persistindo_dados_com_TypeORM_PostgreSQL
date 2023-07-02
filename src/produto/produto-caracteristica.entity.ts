import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'produto_caracteristicas' })
export class ProdutoCaracteristica {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'coluna', length: 100, nullable: false })
  nome: string;
  @Column({ name: 'descricao', length: 100, nullable: false })
  descricao: string;
}
