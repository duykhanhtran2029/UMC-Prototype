import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISetting } from 'src/app/interfaces/ISetting';
import * as Local from 'test-um';
import IUnit from 'test-um/build/types/interfaces/IUnit';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  settings: ISetting[];
  display: ISetting[];
  language: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {language: string, settings: ISetting[]},
    private dialogRef: MatDialogRef<SettingComponent>
  ) { }

  ngOnInit(): void {
    this.settings = this.data.settings;
    this.language = this.data.language;
    this.setDisplay();
  }

  setDisplay(): void {
    this.display = this.settings.map(s => {
      if(this.language === 'Default')
        return s;
      else {
        const lug = Local.getLocalUnitGroup(s.UnitGroupName, this.language);
        if(lug === null)
          return s;
        const lu = lug.getLocalUnit(s.DisplayUnit);
        let d: ISetting = {
          UnitGroupName: lug.LocalUnitGroupName,
          Units: s.Units?.map(u => {
            const tmplu = lug.getLocalUnit(u.Name);
            let du: IUnit = {
              Name: tmplu.LocalName === '' ? u.Name : tmplu.LocalName,
              DefaultSymbol: tmplu.LocalSymbol === '' ? u.DefaultSymbol : tmplu.LocalSymbol,
              IsDefaultUnit: u.IsDefaultUnit,
              Denominator: u.Denominator,
              Numerator: u.Numerator,
              Adder: u.Adder
            }
            return du;
          }),
          DisplayUnit: lu.LocalName === '' ? s.DisplayUnit : lu.LocalName,
          DisplaySymbol: lu.LocalSymbol === '' ? s.DisplaySymbol : lu.LocalSymbol
        }
        return d;
      }
    })
  }

  onSelectChange(event: Event, unitGroup: string)
  {
    const value = (event.target as HTMLInputElement).value.split(' ');
    const iUG = this.display.findIndex(e => e.UnitGroupName === unitGroup);
    const iU = this.display[iUG].Units?.findIndex(e => e.Name === value[0]);
    const tmp = this.settings[iUG].Units;
    if(tmp !== undefined && iU !== undefined)
      {
        this.settings[iUG].DisplayUnit = tmp[iU].Name;
        this.settings[iUG].DisplaySymbol = tmp[iU].DefaultSymbol;
      }
  }

  onLanguageChange(event: Event)
  {
    this.language = (event.target as HTMLInputElement).value;
    this.setDisplay();
  }

  close(){
    this.dialogRef.close({settings: this.settings, language: this.language});
  }
}
