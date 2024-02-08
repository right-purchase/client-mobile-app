import { AxiosError } from "axios";
import { ERROR_MESSAGE } from "../constants/Error";
import { ZodError } from "zod";

export class AppError<T extends Error> extends Error {
  constructor(public readonly source: T, message?: string) {
    super(message ?? source.message);
    this.name = "AppError";
    this.source = source;
    if (source.cause) {
      this.cause = source.cause;
    }
    if (source.stack) {
      this.stack = source.stack;
    }
  }

  public static from(source: unknown) {
    if (source instanceof AxiosError) {
      return new AppError(source, ERROR_MESSAGE.ERR_COMMUNICATION);
    } else if (source instanceof ZodError) {
      return new AppError(source, ERROR_MESSAGE.ERR_VALIDATION);
    } else {
      return new AppError(
        source instanceof Error ? source : new Error(String(source)),
        ERROR_MESSAGE.ERR_UNKNOWN
      );
    }
  }
}
