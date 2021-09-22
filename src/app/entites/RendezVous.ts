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

  public set date(v : Date) {
    this._date = v;
    console.log(this._date);
  }

}
