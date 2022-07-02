import { RouterReducerState } from "@ngrx/router-store";
import { createReducer, on  } from "@ngrx/store";
import { HandlingEvent } from "src/app/Models/handling-event";
import { addHandlingEventSuccess, deleteHandlingEventSuccess, getHandlingEvents, getHandlingEventsSuccess, updateHandlingEventSuccess } from "../Actions/handling-events.actions";

export interface HandlingEventState{
  handlingEvents: ReadonlyArray<HandlingEvent>;
  router: RouterReducerState<any>;
}

const initialState: ReadonlyArray<HandlingEvent> = [];

export const handlingEventReducer = createReducer (
  initialState,
  on(getHandlingEventsSuccess, (state, {handlingEvents}) => [...handlingEvents]),
  on(addHandlingEventSuccess, (state, {handlingEvent}) => [...state, handlingEvent]),
  on(deleteHandlingEventSuccess, (state, { handlingEventId }) => 
      state.filter((handlingEvent) => handlingEvent.handlingEventId !== handlingEventId)
  ),
  on(updateHandlingEventSuccess, (state, { handlingEvent }) => {
      const handlingEvents = state.map((h) => {
        if (h.handlingEventId === handlingEvent.handlingEventId) {
          return handlingEvent;
        }
        return h;
      });
      return handlingEvents;
    })
);
