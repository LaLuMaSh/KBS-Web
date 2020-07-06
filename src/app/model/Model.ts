export class Model {
  public uuid: string;
  public hall: string;
  public movieName: string;
  public time: Date;
}

export class HallDto {
  public id: string;
  public rows: RowDto[];
}
export class RowDto {
  public id: string;
  public places: PlaceDto[];
}
export class PlaceDto {
  public number: number;
  public isReserved: boolean;
}
export class ScreeningDto {
  public uuid: string;
  public hall: string;
  public movieName: string;
  public time: Date;
}
export class ComplexScreeningDto {
  public uuid: string;
  public movie: MovieDto;
  public hall: HallDto;
  public time: Date;
}
export class MovieDto {
  public name: string;
  public price: number;
}
export class CustomerDto {
  public firstName: string;
  public lastName: string;
  public phoneNumber: string;
}

