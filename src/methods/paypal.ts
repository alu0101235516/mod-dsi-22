class Paypal {
  /**
     * Constructor de la clase
     * @param precio precio del producto.
     * @param comision comisión de la entidad.
     */
  constructor(private precio: number = 0, private comision: number) {
  }
  /**
     * Funcion para acceder al precio.
     * @returns el precio del producto.
     */
  getPrecio(): number {
    return this.precio;
  }

  /**
     * Funcion para acceder a la comision.
     * @returns la comision de la entidad bancaria.
     */
  getComision(): number {
    return this.comision;
  }

  /**
   * Metodo para cambiar la comision.
   * @param newComision nueva comision a insertar.
   */
  setComision(newComision: number) {
    this.comision = newComision;
  }
}
