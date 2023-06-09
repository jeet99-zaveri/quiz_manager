import { HttpException, HttpStatus } from '@nestjs/common';

export class ApiTokenPaymentException extends HttpException {
  constructor() {
    super(
      'Payment is remaining. So, pay your bills.',
      HttpStatus.PAYMENT_REQUIRED,
    );
  }
}
