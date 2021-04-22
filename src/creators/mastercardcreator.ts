import {Compra} from '../interface';
import {MasterCard} from '../methods/mastercard';
import {CompraCreator} from '../compra';

export class MasterCardCreator extends CompraCreator {
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
    return new MasterCard(this.precioC);
  }
}
