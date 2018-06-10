export class Contacts {
    /*extends BaseEntity<number>*/
    public contactID: number;
    public customerNumber: number;
    public salespersonName: string;
    public primaryPhone: string;
    public phoneExt: string;
    public phoneTypeID: number;
    public isDecisionMakerIdentified: Boolean;
    public primaryContact: string;
    public position: string;
    public contactEmail: string;
    public contactLinkedInURL: string;
    public companyURL: string;
    public organizationID: number;
    public organizationName: string;
    public originAdCode: string;
    public campaignAdCode: string;
    public industry: string;
    public leadStage: string;
    public lastContact: Date;
    public lastStepType: string;
    public nextStepWho: string;
    public nextStep: Date;
    public nextStepType: string;
    public nextStepNotes: string;
    public notes: string;
    public oneTimeEstimatedValue: number;
    public monthlyTimeEstimatedValue: number;
    public estimatedMonthlyAdSpend: number;
    public apptSetter: string;
    public webinarSignUpDate: Date;
    public firstWebinarDate: Date;
    public webinarName: string;
    public webinarDate: Date;
    public attendedWebinar: Boolean;
    public firstAppointment: Date;
    public saleDate: Date;
    public saleValue: Date;

    /*Base Entity properties*/
    public isActive: boolean;
    public createdBy: number;
    public createdDate: Date;
    public updatedBy: number;
    public updatedDate: Date;
    public loggedInUserId: number;
}

export class Note{
public  NoteId:number;  
public Description:string;
public IsReminderSet: boolean;
public ReminderDatetime :Date;
public ReminderDatetimeString:string;
public CustomerNumber :number;
    /*Base Entity properties*/
    public isActive: boolean;
    public createdBy: number;
    public createdDate: Date;
    public updatedBy: number;
    public updatedDate: Date;
    public loggedInUserId: number;
}