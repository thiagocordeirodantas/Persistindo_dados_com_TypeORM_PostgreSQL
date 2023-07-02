import { Entity, Column } from 'typeorm';

@Entity({ name: 'produto_caracteristicas' })
export class ProdutoCaracteristica {
  @Column({ name: 'coluna', length: 100, nullable: false })
  nome: string;
  @Column({ name: 'descricao', length: 100, nullable: false })
  descricao: string;
}
