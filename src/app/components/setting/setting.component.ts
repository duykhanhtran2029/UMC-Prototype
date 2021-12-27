import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISetting } from 'src/app/interfaces/ISetting';
import * as _ from 'lodash';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {;
  settings: ISetting;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { settings: ISetting },
    private dialogRef: MatDialogRef<SettingComponent>
  ) { }

  ngOnInit(): void {
    this.settings = _.cloneDeep(this.data.settings);
  }

  onSelectChange(event: Event, index: number)
  {
    this.settings.mappers[index].DisplayUnit = 
      this.settings.mappers[index].UnitGroup
        .getUnit((event.target as HTMLInputElement).value);
  }

  onLanguageChange(event: Event)
  {
    this.settings.displayLanguage = (event.target as HTMLInputElement).value;
    this.settings.mappers.forEach(m => m.UnitGroup.localize(this.settings.displayLanguage));
  }

  close(){
    this.dialogRef.close({ settings: this.settings});
  }
}
