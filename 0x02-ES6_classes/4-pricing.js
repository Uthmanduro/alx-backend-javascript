import Currency from './3-currency'; // eslint-disable-line no-unused-vars

export default class Pricing {
  /* eslint-disable no-underscore-dangle */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    } else {
      this._amount = value;
    }
  }

  get currency() {
    return this._amount;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new Error('Currency must be an instance of currency');
    } else {
      this._currency = value;
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
