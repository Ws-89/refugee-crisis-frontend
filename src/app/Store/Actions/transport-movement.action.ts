import { createAction } from "@ngrx/store";
import { TransportMovement } from "src/app/Models/transport-movement";

export const getTransportMovements = createAction('[TransportMovement] Get transport movement');

export const getTransportMovementsSuccess = createAction(
    '[TransportMovement] Get transport movement success', 
    (transportMovement: ReadonlyArray<TransportMovement>) => ({transportMovement})
    );

export const addTransportMovement = createAction(
    '[TransportMovement] Add transport movement', 
    (transportMovement: TransportMovement) => transportMovement
);

export const addTransportMovementSuccess = createAction(
    '[TransportMovement] Add transport movement success', 
    (transportMovement: TransportMovement) => ({ transportMovement }));

export const updateTransportMovement = createAction(
    '[TransportMovement] Update transport movement',
    (transportMovement: TransportMovement) => transportMovement
);

export const updateTransportMovementSuccess = createAction(
    '[TransportMovement] Update transport movement success',
    (transportMovement: TransportMovement) => ({transportMovement})
);

export const deleteTransportMovement = createAction(
    '[TransportMovement] Delete transport movement',
    (transportMovementId: number) => ({transportMovementId})
);

export const deleteTransportMovementSuccess = createAction(
    '[TransportMovement] Delete transport movement success',
    (transportMovementId: number) => ({transportMovementId})
);
