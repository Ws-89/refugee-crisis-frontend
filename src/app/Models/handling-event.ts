import { State } from "@ngrx/store";
import { DeliveryHistory } from "./delivery-history";
import { HandlingEventState } from "./handling-event-state.enum";
import { TransportMovement } from "./transport-movement";

export class HandlingEvent {
    handlingEventId: number;
    transportMovement: TransportMovement;
    deliveryHistory: DeliveryHistory;
    state: HandlingEventState;
    timeStamp: Date;

    constructor(
        handlingEventId?: number,
        transportMovement?: TransportMovement,
        deliveryHistory?: DeliveryHistory,
        state?: HandlingEventState,
        timeStamp?: Date
        ){
        this.handlingEventId = handlingEventId || null;
        this.transportMovement = transportMovement || new TransportMovement
        this.deliveryHistory = deliveryHistory || new DeliveryHistory;
        this.state = state || HandlingEventState.INITIALIZING_EVENT
        this.timeStamp = timeStamp || new Date
    }
}