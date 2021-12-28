import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SettingComponent } from './components/setting/setting.component';
import { IAthlete } from './interfaces/IAthlete';
import { athletes } from './data/athletes';
import { UnitMeasurementService } from './services/unit-measurement.service';
import * as Converters from 'test-um';
import { ISetting } from './interfaces/ISetting';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  displayAthletes: IAthlete[];
  setting: ISetting = {
    displayLanguage: 'Default',
    mappers: [
      {
        DefaultUnitName: 'Year',
        ConvertedProperties: ['age'],
        UnitGroup: Converters.getUnitGroup('Time'),
        DisplayUnit: Converters.getUnitGroup('Time').getUnit('Year'),
        RoundingDecimals: 0
      },
      {
        DefaultUnitName: 'Meter',
        ConvertedProperties: ['height'],
        UnitGroup: Converters.getUnitGroup('Length'),
        DisplayUnit: Converters.getUnitGroup('Length').getUnit('Meter'),
        RoundingDecimals: 3
      },
      {
        DefaultUnitName: 'Kilogram',
        ConvertedProperties: ['weight'],
        UnitGroup: Converters.getUnitGroup('Mass'),
        DisplayUnit: Converters.getUnitGroup('Mass').getUnit('Kilogram'),
        RoundingDecimals: 2
      },
      {
        DefaultUnitName: 'Celsius',
        ConvertedProperties: ['temperature'],
        UnitGroup: Converters.getUnitGroup('Temperature'),
        DisplayUnit: Converters.getUnitGroup('Temperature').getUnit('Celsius'),
        RoundingDecimals: 1
      },
      {
        DefaultUnitName: 'Meter Per Second',
        ConvertedProperties: ['fastest_speed', 'avg_speed'],
        UnitGroup: Converters.getUnitGroup('Speed'),
        DisplayUnit: Converters.getUnitGroup('Speed').getUnit('Meter Per Second'),
        RoundingDecimals: 5
      },
      {
        DefaultUnitName: 'Meter Per Second Squared',
        ConvertedProperties: ['fastest_acceleration', 'avg_acceleration'],
        UnitGroup: Converters.getUnitGroup('Acceleration'),
        DisplayUnit: Converters.getUnitGroup('Acceleration').getUnit('Meter Per Second Squared'),
        RoundingDecimals: 5
      },
    ]
  }

  dialogRef: MatDialogRef<SettingComponent>;
  constructor(
    private dialog: MatDialog,
    private unitMeasurementSerive: UnitMeasurementService
    ) {}

  ngOnInit(): void {
    this.displayAthletes = this.unitMeasurementSerive.convert(athletes, this.setting.mappers);
  }


  openSettings() {
    this.dialogRef = this.dialog.open(SettingComponent, {
      data: { settings: this.setting },
      disableClose: true,
    });
    this.dialogRef.afterClosed().subscribe(data => {
      this.setting = data.settings;
      this.displayAthletes = this.unitMeasurementSerive.convert(athletes, this.setting.mappers);
    })
  }
}
