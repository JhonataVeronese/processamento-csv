import { UseCaseError } from "../../../../../core/domain/error/use-case.error";

export class SyndicNotFoundError extends UseCaseError {
	get value() {
		return {
			id: this._id,
			name: this._name,
			message: this._message,
			context: this._context,
			date: this._date
		};
	}

	constructor() {
		super("Syndic not found", {
			context: "GetSyndicDataUseCase",
			code: "SYNDIC_NOT_FOUND",
			name: "SyndicNotFoundError"
		});
	}
}
