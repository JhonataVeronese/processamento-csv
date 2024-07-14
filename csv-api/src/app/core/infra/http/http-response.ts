export interface IHttpResponse {
  statusCode: number;
  body?: ObjectAny | string;
}

export interface ErrorData {
  error: string;
  message: string;
}

export function ok<T extends ObjectAny>(dto?: T): IHttpResponse {
  return {
    statusCode: 200,
    body: dto,
  };
}

export function created<T extends ObjectAny>(dto?: T): IHttpResponse {
  return {
    statusCode: 201,
    body: dto,
  };
}

export function noContent(): IHttpResponse {
  return {
    statusCode: 204,
  };
}

export function clientError(errors: Error[]): IHttpResponse {
  return {
    statusCode: 400,
    body: {
      errors: errors.map((error) => {
        return {
          error: error.name,
          message: error.message,
        };
      }),
    },
  };
}

export function notFound(error: Error): IHttpResponse {
  return {
    statusCode: 404,
    body: {
      error: error.message,
    },
  };
}

export function fail(error: Error): IHttpResponse {
  console.error("Internal Server Error: ", error);

  return {
    statusCode: 500,
    body: {
      error: "Internal Server Error",
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ObjectAny = { [key: string]: any };
