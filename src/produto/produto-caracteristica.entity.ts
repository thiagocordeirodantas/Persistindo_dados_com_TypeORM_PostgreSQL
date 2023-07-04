import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ProdutoEntity } from './produto.entity';

@Entity({ name: 'produto_caracteristicas' })
export class ProdutoCaracteristicaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'coluna', length: 100, nullable: false })
  nome: string;
  @Column({ name: 'descricao', length: 100, nullable: false })
  descricao: string;
  @ManyToOne(() => ProdutoEntity, (produto) => produto.caracteristicas)
  produto: ProdutoEntity;
}
