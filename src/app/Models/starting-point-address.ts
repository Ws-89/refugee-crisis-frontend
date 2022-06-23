import { NullTemplateVisitor } from "@angular/compiler";

export class StartingPointAddress {
    startingPointAddressId: number;
    postCode: string;
    city: string;

    constructor(
        startingPointAddressId?: number,
        postCode?: string,
        city?: string
    ){
        this.startingPointAddressId = startingPointAddressId || null;
        this.postCode = postCode || null;
        this.city = city || null;
    }
}