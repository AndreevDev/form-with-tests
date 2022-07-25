import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addCustomer, fetchLocations, locationsFetching, locationsFetched, locationsFetchingError, locationsCleared } from "../actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Action creators", () => {
    const mockJSON = {
      data: {},
    };

    describe("addCustomer", () => {
      it("should create the expected action", () => {
        const expectedAction = {
          type: 'ADD_CUSTOMER',
          payload: {},
        };
        expect(addCustomer(mockJSON)).toMatchObject(
          expectedAction
        );
      });
    });

    describe("locationsFetching", () => {
        it("should create the expected action", () => {
          const expectedAction = {
            type: 'LOCATIONS_FETCHING'
          };
          expect(locationsFetching()).toMatchObject(
            expectedAction
          );
        });
      });

      describe("locationsFetched", () => {
        it("should create the expected action", () => {
          const expectedAction = {
            type: 'LOCATIONS_FETCHED',
            payload: {},
          };
          expect(locationsFetched(mockJSON)).toMatchObject(
            expectedAction
          );
        });
      });

      describe("locationsFetchingError", () => {
        it("should create the expected action", () => {
          const expectedAction = {
            type: 'LOCATIONS_FETCHING_ERROR'
          };
          expect(locationsFetchingError()).toMatchObject(
            expectedAction
          );
        });
      });

      describe("locationsCleared", () => {
        it("should create the expected action", () => {
          const expectedAction = {
            type: 'LOCATIONS_CLEARED'
          };
          expect(locationsCleared()).toMatchObject(
            expectedAction
          );
        });
      });

    describe("fetchLocations", () => {
        it("Creates LOCATIONS_FETCHING and LOCATIONS_FETCHED when fetching locations", () => {
            const expectedActions = [
                { type: 'LOCATIONS_FETCHING' },
                { type: 'LOCATIONS_FETCHED', payload: { locations: [] } },
              ];
            
            const store = mockStore({
                locations: [],
            });

            return store.dispatch(fetchLocations())
                .then(() => {
                    const actualActions = store.getActions().map(action => action.type)
                    expect(actualActions).to.eql(expectedActions)
                });
        });
      });
  });