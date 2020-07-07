export class Screening {
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
  public id: number;
  public places: PlaceDto[];
}
export class PlaceDto {
  public number: number;
  public reserved: boolean;
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
export class ComplexMovie {
  public title: string;
  public price: number;
  public from: Date;
  public to: Date;
}
export class CustomerDto {
  public uuid: string;
  public firstName: string;
  public lastName: string;
  public phoneNumber: string;
}

export class LocationDto {
  public row: number;
  public place: number;
}
export class ReservationDto {
  public places: LocationDto[];
  public customerUuid: string;
  public screeningUuid: string;
}
export class CreateScreeningDto {
  public title: string;
  public amount: number;
  public start: Date;
  public times: string[];
}

export class MessageReturnDto {
  public msg: string;
}

