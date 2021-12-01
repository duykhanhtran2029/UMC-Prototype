import IUnit from "test-um/build/types/interfaces/IUnit";

export interface ISetting {
    UnitGroupName: string,
    Units?: IUnit[],
    DisplayUnit: string,
    DisplaySymbol: string
}