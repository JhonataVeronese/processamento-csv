import {
  IHttpResponse,
  clientError,
  ok,
} from "../../../core/infra/http/http-response";
import { IController } from "../../../core/protocols/controller.interface";
import { RequestDTO } from "./dto";
import { IProcessImportCsvUseCase } from "./type";

export class ProcessImportCsvController implements IController {
  private useCase: IProcessImportCsvUseCase;
  constructor(useCase: IProcessImportCsvUseCase) {
    this.useCase = useCase;
  }

  async handle(dto: RequestDTO): Promise<IHttpResponse> {
    const result = await this.useCase.handle(dto);

    if (result.isLeft()) {
      return clientError([result.value]);
    }

    return ok(result.value);
  }
}
