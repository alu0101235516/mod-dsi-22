export interface Compra {
    getPrecio(): number;
    getComision(): number;
    setPrecio(newPrecio: number): void;
    getPrecioFinal(): number;
    setPrecioFinal(): void;
}
