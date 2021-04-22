import {Compra} from '../interface';

export class MasterCard implements Compra {
  private readonly comision = 5;

  /**
   * Constructor de la clase.
   * @param precio precio del producto
   * @param precioFinal precio despues de aplicar la comision
   */
  constructor(private precio: number, private precioFinal: number = 0) {
    this.setPrecioFinal();
  }

  /**
   * Metodo para acceder a la comision
   * @returns la comision del producto
   */
  getComision() {
    return this.comision;
  }

  /**
   * Metodo para acceder al precio
   * @returns el precio del producto
   */
  getPrecio() {
    return this.precio;
  }

  /**
   * Metodo para asignar un nuevo precio
   * @param newPrecio el nuevo precio
   */
  setPrecio(newPrecio: number) {
    this.precio = newPrecio;
  }

  /**
   * Metodo para acceder al precio final
   * @returns el precio final
   */
  getPrecioFinal() {
    return this.precioFinal;
  }

  /**
   * Metodo para asignar un nuevo precio final
   */
  setPrecioFinal() {
    this.precioFinal = this.precio + this.precio * (this.comision / 100 );
  }
}
