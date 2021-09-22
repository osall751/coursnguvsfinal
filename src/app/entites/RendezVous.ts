export class RendezVous {
  constructor(private _id: number, private _description: string,
    private _lieu: string,
    private _date: Date) { }

  public get id(): number {
    return this._id;
  }
  public get description(): string {
    return this._description;
  }

  public get lieu(): string {
    return this._lieu;
  }
  public get date(): Date {
    return this._date;
  }

  public set id(v: number) {
    this._id = v;
  }

  public set lieu(v: string) {
    this._lieu = v;
  }

  public set description(v: string) {
    this._description = v;
  }

  public set date(v: Date) {
    this._date = v;
  }

}
