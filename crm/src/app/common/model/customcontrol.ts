export class UserScreenCustomControls {
    public userScreenCustomControlId: number;
    public organizationId: number;
    public controlLabelName: string;
    public controlType: string;
    public isRequired: boolean;
    public isVisible: boolean;
    public sortOrder: number;

    /*Base Entity properties*/
    public isActive: boolean;
    public createdBy: number;
    public createdDate: Date;
    public updatedBy: number;
    public updatedDate: Date;
}
