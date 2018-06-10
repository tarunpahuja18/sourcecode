export class UploadResultModel {
    public isProcessed = false;
    public isSuccess: boolean;
    public isError: boolean;
    public successFilePath: string;
    public errorFilePath: string;
    public uploadedFilePath: string;
}