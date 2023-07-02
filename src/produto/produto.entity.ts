import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';





@Entity({ name: 'produtos' })
export class ProdutoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'usuario_id', length: 100, nullable: false })
  usuarioId: string;
  @Column({ name: 'nome', length: 70, nullable: false })
  nome: string;
  @Column({ name: 'valor', nullable: false })
  valor: number;
  @Column({ name: 'quantidade', nullable: false })
  quantidade: number;
  @Column({ name: 'descricao', length: 70, nullable: false })
  descricao: string;
  @Column({ name: 'categoria', length: 100, nullable: false })
  categoria: string;

  @CreateDateColumn({ name: 'created_at' })
  createAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
  // caracteristicas: CaracteristicaProduto[];
  // imagens: ImagemProduto[];
}
