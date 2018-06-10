import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomControlSaveService } from './customcontrolsave.service';
import { UserScreenCustomControls } from '../../common/index';
import { Contacts, AlertService, Control, UserControl } from '../../common/index';

@Component({
    selector: 'app-customcontrolsave',
    templateUrl: './customcontrolsave.component.html',
    styleUrls: ['./customcontrolsave.component.scss'],
    providers: [CustomControlSaveService],
    encapsulation: ViewEncapsulation.None
})

export class CustomControlSaveComponent implements OnInit {
    public customControlForm: FormGroup;
    maxControlCount = 7;
    currentControlcount = 1;
    havecustomControl = false;
    customControls: UserScreenCustomControls[];
    constructor(private _fb: FormBuilder,
        private customcontrolService: CustomControlSaveService) {
        this.getCustomControls(1);
    }

    ngOnInit() {
        this.customControlForm = this._fb.group({
            itemRows: this._fb.array(
                [this.initItemRows('', 0)]
            )
        });
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