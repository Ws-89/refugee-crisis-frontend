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
        this.transportMovement = transportMovement || null;
        this.deliveryHistory = deliveryHistory || null;
        this.state = state || null;
        this.timeStamp = timeStamp || null;
    }
}