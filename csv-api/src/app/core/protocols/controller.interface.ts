import { IHttpResponse } from "../infra/http/http-response";

export interface IController<T = unknown> {
  handle(request: T): Promise<IHttpResponse>;
}
