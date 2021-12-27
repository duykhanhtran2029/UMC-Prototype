import { Injectable } from '@angular/core';
import { IMapper } from '../interfaces/IMapper';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UnitMeasurementService {

  constructor() { }
  convert<T>(input: T[], mappers: IMapper[]): T[] {
    
    let ouput: T[] = _.cloneDeep(input);
    mappers.forEach(mapper => {
      ouput.forEach(element => {
        mapper.ConvertedProperties.forEach(property => {
          (element as any)[property] = 
            mapper.UnitGroup.convert((element as any)[property], mapper.DefaultUnitName, mapper.DisplayUnit.Name);
        });
      });
    });
    return ouput;
  }
}
