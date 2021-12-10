// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducers from './reducers/reducers'


// const reducersItems = combineReducers(rootReducers);

// const initialState = {};

// const store = createStore(
//   reducersItems,
//   initialState,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;

// // import { createStore } from "redux";
// // import rootReducers from "./reducers/reducers";

// // function saveToLocalStorage(state: any) {
// //   try {
// //     const serialisedState = JSON.stringify(state);
// //     localStorage.setItem("persistantState", serialisedState);
// //   } catch (e) {
// //     console.warn(e);
// //   }
// // }

// // function loadFromLocalStorage() {
// //   try {
// //     const serialisedState = localStorage.getItem("persistantState");
// //     if (serialisedState === null) return undefined;
// //     return JSON.parse(serialisedState);
// //   } catch (e) {
// //     console.warn(e);
// //     return undefined;
// //   }
// // }

// // const store = createStore(rootReducers, loadFromLocalStorage());

// // store.subscribe(() => saveToLocalStorage(store.getState()));

// // export default store;
// export type RootState = ReturnType<typeof store.getState>
export {}