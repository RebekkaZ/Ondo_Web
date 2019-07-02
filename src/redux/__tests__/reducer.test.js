import rootReducer from "../reducers";
import * as actions from "../actions/actions";

describe("LOAD_ROOMCONDITION_SUCCESS", function () {
    it("should add roomCondition when passed LOAD_ROOMCONDITION_SUCCESS and id does not exists yet", () => {
        // arrange
        const initialState = {
            roomConditions: [
                {}
            ]
        }

        const newRoomCondition = {
            id: 1,
            temperature: 25,
            humidity: 65
        };

        const action = actions.loadRoomConditionSucecess(newRoomCondition);

        // act
        const newState = rootReducer(initialState, action);

        // assert
        expect(newState.roomConditions.length).toEqual(2);
        expect(newState.roomConditions[1].id).toEqual(1);
    });

    it("should update roomCondition when passed LOAD_ROOMCONDITION_SUCCESS and id does already exists", () => {
        // arrange
        const initialState = {
            roomConditions: [
                {},
                { id: 1, temperature: 25, humidity: 65 }
            ]
        };

        const newRoomCondition = { id: 1, temperature: 27, humidity: 40 };
        const action = actions.loadRoomConditionSucecess(newRoomCondition);

        // act
        const newState = rootReducer(initialState, action);
        const updatedRoomCondition = newState.roomConditions.find(a => a.id == newRoomCondition.id);

        // assert
        expect(updatedRoomCondition.temperature).toEqual(27);
        expect(newState.roomConditions.length).toEqual(2);
    });
})

describe("LOAD_ACSETTING_SUCCESS", function () {
    it("should add acSetting when passed LOAD_ACSETTING_SUCCESS and id does not exists yet", () => {
        // arrange
        const initialState = {
            acSettings: [
                {}
            ]
        }

        const newAcSetting =
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

        const action = actions.loadAcSettingSuccess(newAcSetting);

        // act
        const newState = rootReducer(initialState, action);

        // assert
        expect(newState.acSettings.length).toEqual(2);
        expect(newState.acSettings[1].id).toEqual(1);
    });

    it("should update acSetting when passed LOAD_ACSETTING_SUCCESS and id does already exists", () => {
        // arrange
        const initialState = {
            acSettings: [
                {},
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
        };

        const newAcSettings =  {
            id: 1,
            devicePower: true,
            targetTemp: 26,
            fanMode: 4,
            quietOn: true,
            powerfulOn: true,
            swingH: true,
            swingV: true
        };
        const action = actions.loadAcSettingSuccess(newAcSettings);

        // act
        const newState = rootReducer(initialState, action);
        const updatedAcSettings = newState.acSettings.find(a => a.id == newAcSettings.id);

        // assert
        expect(updatedAcSettings.targetTemp).toEqual(26);
        expect(newState.acSettings.length).toEqual(2);
    });
})

describe("CHANGE_ACSETTING_SUCCESS", function () {
    it("should update acSetting when passed CHANGE_ACSETTING_SUCCESS", () => {
        // arrange
        const initialState = {
            acSettings: [
                {},
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
        };

        const newAcSettings =  {
            id: 1,
            devicePower: true,
            targetTemp: 26,
            fanMode: 4,
            quietOn: true,
            powerfulOn: true,
            swingH: true,
            swingV: true
        };
        const action = actions.changeAcSettingSuccess(newAcSettings);

        // act
        const newState = rootReducer(initialState, action);
        const updatedAcSettings = newState.acSettings.find(a => a.id == newAcSettings.id);

        // assert
        expect(updatedAcSettings.targetTemp).toEqual(26);
        expect(newState.acSettings.length).toEqual(2);
    });
})
