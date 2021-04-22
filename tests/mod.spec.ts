import 'mocha';
import {CompraCreator} from '../src/compra';
import {MasterCardCreator} from '../src/creators/mastercardcreator';
import {VisaCreator} from '../src/creators/visacreator';

function clientCode(CompraCreator: CompraCreator) {
  console.log(CompraCreator.logic());
}
describe(`EJ MOD - PAGOS`, () => {
  describe(`Correcto funcionamiento de los pagos`, () => {
    it('Pago por mastercard', () => {
      clientCode(new MasterCardCreator(10));
    });
    it('Pago por Visa', () => {
      clientCode(new VisaCreator(5));
    });
  });
});
