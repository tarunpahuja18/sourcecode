export class BaseEntity<T> {
    public IsActive: boolean;
    public CreatedBy: number;
    public CreatedDate: Date;
    public UpdatedBy: number;
    public UpdatedDate: Date;
    public LoggedInUserId: number;
}