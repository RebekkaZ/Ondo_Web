import { createStore } from "redux";
import rootReducer from "../reducers";
import * as actions from "../actions/actions";

it("Should handle creating acSettings", function () {
  // arrange
  const initialState = {
    acSettings: [
      {
        id: 1,
        devicePower: true,
        targetTemp: 24,
        fanMode: 2,
        quietOn: true,
        powerfulOn: true,
        swingH: true,
        swingV: true
      }
    ]
  }
  const store = createStore(rootReducer, initialState);
  const newAcSetting = {
    id: 1,
    devicePower: true,
    targetTemp: 26,
    fanMode: 5,
    quietOn: true,
    powerfulOn: true,
    swingH: true,
    swingV: true
  };

  // act
  const action = actions.changeAcSettingSuccess(newAcSetting);
  store.dispatch(action);

  // assert
  const createdAcSetting = store.getState().acSettings[0];
  expect(createdAcSetting).toEqual(newAcSetting);
});
