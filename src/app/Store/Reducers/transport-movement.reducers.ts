import { RouterReducerState } from "@ngrx/router-store";
import { createReducer, on } from "@ngrx/store";
import { TransportMovement } from "src/app/Models/transport-movement";
import { addTransportMovementSuccess, deleteTransportMovementSuccess, getTransportMovementsSuccess, updateTransportMovementSuccess } from "../Actions/transport-movement.action";

export interface TransportMovementState{
    transportMovements: ReadonlyArray<TransportMovement>;
    router: RouterReducerState<any>;
}

const initialState: ReadonlyArray<TransportMovement> = [];

export const transportMovementReducer = createReducer (
    initialState,
    on(getTransportMovementsSuccess, (state, {transportMovement}) => [...transportMovement]),
    on(addTransportMovementSuccess, (state, {transportMovement}) => [...state, transportMovement]),
    on(deleteTransportMovementSuccess, (state, { transportMovementId }) => 
        state.filter((vehicle) => vehicle.transportMovementId !== transportMovementId)
    ),
    on(updateTransportMovementSuccess, (state, { transportMovement }) => {
        const transportMovements = state.map((p) => {
          if (p.transportMovementId === transportMovement.transportMovementId) {
            return transportMovement;
          }
          return p;
        });
        return transportMovements;
      })
);