export enum ErrorType {
  translating_same_locale,
  translating_unknown_error,
  translating_empty_source_value
}

export class AllyError extends Error {
  constructor (
    public readonly type: ErrorType,
    public readonly data?: any,
    public readonly errors?: Error | Error[]) {
    super(ErrorType[type].toString())
  }

  toString () {
    return ErrorType[this.type].toString()
  }
}