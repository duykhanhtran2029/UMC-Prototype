import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISetting } from 'src/app/interfaces/ISetting';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  settings: ISetting[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ISetting[],
    private dialogRef: MatDialogRef<SettingComponent>
  ) { }

  ngOnInit(): void {
    this.settings = this.data;
    console.log(this.settings);
  }

  onSelectChange(event: Event, unitGroup: string)
  {
    const value = (event.target as HTMLInputElement).value.split(' ');
    const index = this.settings.findIndex(e => e.UnitGroupName === unitGroup);
    this.settings[index].DisplayUnit = value[0];
    this.settings[index].DisplaySymbol = value[1];
  }

  close(){
    this.dialogRef.close(this.settings);
  }
}
