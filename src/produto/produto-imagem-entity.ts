import { Entity, Column } from 'typeorm';

@Entity({ name: 'produto_images' })
export class ProdutoImagemEntity {
  @Column({ name: 'url', length: 100, nullable: false })
  url: string;
  @Column({ name: 'descricao', length: 90, nullable: false })
  descricao: string;
}
