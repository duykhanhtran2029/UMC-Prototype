import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as Local from 'test-um/build/index';
import { UnitGroup } from 'test-um/build/index';
import IUnit from 'test-um/build/interfaces/IUnit';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  settings: IUnit[];
  language: string;
  unitGroups: UnitGroup[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { language: string, settings: IUnit[], unitGroups: UnitGroup[]},
    private dialogRef: MatDialogRef<SettingComponent>
  ) { }

  ngOnInit(): void {
    this.settings = this.data.settings;
    this.language = this.data.language;
    this.unitGroups = this.data.unitGroups;
  }

  onSelectChange(event: Event, index: number)
  {
    const value = (event.target as HTMLInputElement).value.split(' ');
    this.settings[index] = this.unitGroups[index].getUnit(value[0]);
  }

  onLanguageChange(event: Event)
  {
    this.language = (event.target as HTMLInputElement).value;
    this.unitGroups.forEach(ug => ug.localize(this.language));
  }

  close(){
    this.dialogRef.close({settings: this.settings, language: this.language});
  }
}
