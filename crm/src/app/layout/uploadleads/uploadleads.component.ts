import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { UploadLeadsService } from './uploadleads.service';
import { UploadResultModel } from '../../common/index';

@Component({
  selector: 'app-uploadleads',
  templateUrl: './uploadleads.component.html',
  styleUrls: ['./uploadleads.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [UploadLeadsService]
})

export class UploadleadsComponent implements OnInit {
  result: '';
  uploadResultModel: UploadResultModel[];
  isProcessed = false;
  @ViewChild('excelFileUploader') excelFileUploader;
  constructor(private uploadLeadsService: UploadLeadsService) { }

  ngOnInit() {
  }

  uploadFile() {
    const formData = new FormData();
    let uploadedExcelFile = this.excelFileUploader.nativeElement;
    if (uploadedExcelFile.files && uploadedExcelFile.files[0]) {
      formData.append('uploadedExcelFile', uploadedExcelFile.files[0]);
    }
    this.uploadLeadsService.uploadleads(formData).then(
      data => {
        this.isProcessed = true;
        this.uploadResultModel = data;
      },
      error => {
        this.isProcessed = true;
        this.uploadResultModel = <UploadResultModel[]>[];
        const customModel = new  UploadResultModel();
        customModel.errorFilePath =  'abc';
        customModel.successFilePath =  'success';
        this.uploadResultModel.push(customModel);
      });
  }

  downloadFile(filepath: string) {
    this.uploadLeadsService.downloadFileTemplate(filepath);
  }

}
