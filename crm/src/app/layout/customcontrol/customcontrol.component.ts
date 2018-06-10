import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomControlService } from './customcontrol.service';
import { UserScreenCustomControls } from '../../common/index';

@Component({
    selector: 'app-customcontrol',
    templateUrl: './customcontrol.component.html',
    styleUrls: ['./customcontrol.component.scss'],
    providers: [CustomControlService],
    encapsulation: ViewEncapsulation.None
})

export class CustomControlComponent implements OnInit {
    public customControlForm: FormGroup;
    maxControlCount = 7;
    currentControlcount = 1;
    havecustomControl = false;
    customControls: UserScreenCustomControls[];
    constructor(private _fb: FormBuilder,
        private customcontrolService: CustomControlService) {
        this.getCustomControls(1);
    }

    ngOnInit() {
        this.customControlForm = this._fb.group({
            itemRows: this._fb.array(
                [this.initItemRows('', 0)]
            )
        });
        // this.customControlForm = this._fb.group({
        //     name: ['', [Validators.required, Validators.minLength(5)]],
        // });
        console.log(this.customControlForm);
    }

    initItemRows(controldata: string, id: number) {
        return this._fb.group({
            itemname: [controldata, [Validators.required, Validators.minLength(5)]],
            itemId: [id]
        });
    }

    addNewRow(currentObjstring: string, id: number ) {
        if (this.currentControlcount !== this.maxControlCount) {
            const control = <FormArray>this.customControlForm.controls['itemRows'];
            control.push(this.initItemRows(currentObjstring, id));
            this.currentControlcount += 1;
        }
    }

    deleteRow(index: number) {
        const control = <FormArray>this.customControlForm.controls['itemRows'];
        control.removeAt(index);
        this.currentControlcount -= 1;
    }

    saveCustomControls() {
        const userScreenCustomControls = [];
        const currentRecords = this.customControlForm.value;
        for (let _i = 0; _i < currentRecords.itemRows.length; _i++) {
            const itemNameData = currentRecords.itemRows[_i];
            const userScreenCustom = {
                UserScreenCustomControlId: itemNameData.itemId !== null ? itemNameData.itemId :0,
                OrganizationId: 1,
                ControlLabelName: itemNameData.itemname,
                ControlType: 'text',
                IsRequired: false,
                IsVisible: true,
                SortOrder: _i + 1,
                isActive: true,
                createdBy: 1,
                createdDate: new Date(),
                updatedBy: 1,
                updatedDate: new Date()
            };
            userScreenCustomControls.push(userScreenCustom);
        }
        this.customcontrolService.saveCustomControl(userScreenCustomControls)
            .subscribe(
                data => {
                    console.log(data);
                    console.log('success');
                    // this.getCustomControls(1);
                },
                error => {
                    console.log(error);
                    console.log('error');
                });
    }

    getCustomControls(id: number) {
        this.customcontrolService.getCustomControls(id).then(datareturned => {
            if (datareturned.length === 0) {
                this.havecustomControl = false;
            } else {
                this.havecustomControl = true;
                this.customControls = datareturned;
            }
            if (this.havecustomControl) {
                for (let _i = 0; _i < this.customControls.length; _i++) {
                    this.addNewRow(this.customControls[_i].controlLabelName, this.customControls[_i].userScreenCustomControlId);
                }
                this.deleteRow(0);
            } else {
                this.customControlForm = this._fb.group({
                    itemRows: this._fb.array([this.initItemRows('', 0)])
                });
            }
        });
    }
}