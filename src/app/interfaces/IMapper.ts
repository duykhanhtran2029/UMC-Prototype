import { UnitGroup } from "test-um";
import IUnit from "test-um/build/interfaces/IUnit";

export interface IMapper {
    UnitGroup: UnitGroup,
    DefaultUnitName: string,
    DisplayUnit: IUnit,
    ConvertedProperties: string[],
    RoundingDecimals: number
}