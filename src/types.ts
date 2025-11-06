export type ValidationType = "xsd" | "dtd" | "form" | "none";
export type ErrorName = "FetchError" | "XSDValidatorParseError" | "XMLParseError" | "UnknownError" | "XMLValidateError" | "ParseTimeout" | "WorkerRuntimeError" | "LibInitError" | "RegisteringProviderError";

export interface ValidationInfo {
  name: ErrorName;
  type: ValidationType;
  details: {
    message: string;
    file: string;
    line: number;
    col: number;
  };
}


export type WorkerRequest = {
  xmlText: string;
};

export type SimpleWorkerStatus = boolean;

export type WorkerBags = ValidationInfo[];

export type PayloadId = string
export type WorkerResponse = { id:PayloadId, status: SimpleWorkerStatus; bags: WorkerBags };

export type PayloadType = "validate" | "terminate";

export type ValidationPayload = {
  xmlText: string,
  duration?: number,
  mainSchemaUrl?: string | null
}

export type WorkerPayload<TData extends Record<string, any>> = {
  id:PayloadId
  type: PayloadType;
  payload: TData | null
}

export type Schema = {
  filename: string;
  contents: string
}

export type MapInputProvider = {
  match(filename: string): boolean,
  open(filename: string): number | undefined,
  read(fd: number, buf: Uint8Array): number,
  close(fd: number): boolean,
  register(): any,
  cleanup(): void,
}

export type WorkerStatus = "working" | "done" | "error";

export type WorkerStatusWorking = "working";
export type WorkerStatusDone = "done";
export type WorkerStatusError = "error";

export type UseWorker = {
  // status: WorkerStatus
  status(): Promise<WorkerStatusDone | WorkerStatusError>,
  result():WorkerBags ;
  validate(xmlText:string, mainSchemaUrl:string|null, stopOnFailure:boolean) :Promise<ValidationInfo[]>
  terminate():void;
}