export class DomainError extends Error {
  name: string;
  code: number | string;

  constructor(code: number | string, message: string) {
    super(message);

    this.name = this.constructor.name;
    this.code = code;
    this.message = message;

    Error.captureStackTrace(this, this.constructor);
  }
}
