export class Control {
    /*extends BaseEntity<number>*/
    public screenControlId: number;
    public menuId: number;
    public controlLabelId: string;
    public controlLabelName: string;
    public controlId: number;
    public controlName: string;
    public controlType: string;
    public sortOrder: number;
    public isRequired: boolean;
    public isVisible: boolean;
    public validationMessageString: string;
    public validationClass: string;
    public validationErrorClass: string;
    public controlSoruceReference: string;
  

    /*Base Entity properties*/
    public isActive: boolean;
    public createdBy: number;
    public createdDate: Date;
    public updatedBy: number;
    public updatedDate: Date;
    public loggedInUserId: number;
}

export class UserControl {
    /*extends BaseEntity<number>*/
    public roleId: number;
    public screenControlId: number;
    public organizationId: number;
    public sortOrder: number;
    public isRequired: boolean;
    public isVisible: boolean;
    public controlHTML: string;


    /*Base Entity properties*/
    public isActive: boolean;
    public createdBy: number;
    public createdDate: Date;
    public updatedBy: number;
    public updatedDate: Date;
    public loggedInUserId: number;
}


export class controlVisibility{
    public isCustomerNumberVisisble :boolean;
    public issalespersonNameVisisble :boolean;
    public isprimaryPhoneVisisble :boolean;
    public isphoneExtVisisble :boolean;
    public isphoneTypeIDVisisble :boolean;
    public isisDecisionMakerIdentifiedVisisble :boolean;
    public isprimaryContactVisisble :boolean;
    public ispositionVisisble :boolean;
    public iscontactEmailVisisble :boolean;
    public iscontactLinkedInURLVisisble :boolean;
    public iscompanyURLVisisble :boolean;
    public isorganizationNameVisisble :boolean;
    public isoriginAdCodeVisisble :boolean;
    public iscampaignAdCodeVisisble :boolean;
    public isindustryVisisble :boolean;
    public   isleadStageVisisble :boolean;
    public   islastContactVisisble :boolean;
    public   islastStepTypeVisisble :boolean;
    public   isnextStepWhoVisisble :boolean;
    public   isnextStepVisisble :boolean;
    public   isnextStepTypeVisisble :boolean;
    public   isnextStepNotesVisisble :boolean;
    public   isnotesVisisble :boolean;
    public   isoneTimeEstimatedValueVisisble :boolean;
    public   ismonthlyTimeEstimatedValueVisisble :boolean;
    public   isestimatedMonthlyAdSpendVisisble :boolean;
    public   isapptSetterVisisble :boolean;
    public   iswebinarSignUpDateVisisble :boolean;
    public   isfirstWebinarDateVisisble :boolean;
    public   iswebinarNameVisisble :boolean;
    
    public   iswebinarDateVisisble :boolean;  
    public   isattendedWebinarVisisble :boolean; 
    public   isfirstAppointmentVisisble :boolean; 
    public   issaleDateVisisble :boolean; 
    public   issaleValueVisisble :boolean;
}

