import Categoria from '../models/Categoria';

interface CreateCategoriaDTO {
  nome: string;
}

class CategoriaRepository {
  private categorias: Categoria[];

  constructor() {
    this.categorias = [];
  }

  public create({ nome }: CreateCategoriaDTO): Categoria {
    const appointment = new Categoria({ nome });
    this.categorias.push(appointment);
    return appointment;
  }

  public all(): Categoria[] {
    return this.categorias;
  }
}

export default CategoriaRepository;
