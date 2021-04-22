import {Visa} from "../methods/visa";
import {CompraCreator} from '../compra';
import {Compra} from '../interface';

export class VisaCreator extends CompraCreator {
  /**
     * Constructor de la clase
     * @param precioC Precio del articulo.
     */
  constructor(protected precioC: number) {
    super();
  }
  /**
   * Metodo para retorno
   * @returns del nuevo precio.
   */
  public factoryMethod(): Compra {
    return new Visa(this.precioC);
  }
}
