export class GeoCoord {
    constructor(public latitude:number, public longitude:number){}

    toString(): string{
        return this.latitude.toString().concat(",", this.longitude.toString())
    }
}
