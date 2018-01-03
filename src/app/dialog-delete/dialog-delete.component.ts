import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ListDefuntComponent } from '../list-defunt/list-defunt.component';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html'
})
export class DialogDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef<ListDefuntComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
