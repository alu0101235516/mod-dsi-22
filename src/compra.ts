import {Compra} from './interface';

export abstract class CompraCreator {
  private precio: number;
  private precioFinal: number;

  /**
   * Método para la implementación del factoryMethod().
   */
  public abstract factoryMethod(): Compra;

  /**
   * Método para el retorno por pantalla.
   * @returns muestra por pantalla el precio final.
   */
  public logic() {
    const Compra = this.factoryMethod();
    return `El precio del producto es ${Compra.getPrecio()} ` +
            `la comisión sería un ${Compra.getComision()} %`+
            `el precio final sería ${Compra.getPrecioFinal()} `;
  }
}
