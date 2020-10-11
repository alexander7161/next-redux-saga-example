import { Store } from "redux";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import createSagaMiddleware, { SagaMiddleware, Task } from "redux-saga";
import reducer from "./reducers";
import rootSaga from "./sagas";
import { configureStore } from "@reduxjs/toolkit";
import { red } from "@material-ui/core/colors";

export type AppState = ReturnType<typeof reducer>;

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const getStore = (sagaMiddleware: SagaMiddleware<object>) => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    //If it's on server side, create a store
    return configureStore({
      reducer,
      middleware: [sagaMiddleware],
      devTools: process.env.NODE_ENV === "development",
    });
  } else {
    //If it's on client side, create a store which will persist
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "nextjs",
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, reducer);

    const store = configureStore({
      reducer: persistedReducer,
      middleware: [sagaMiddleware],
      devTools: process.env.NODE_ENV === "development",
    });

    (store as any).__persistor = persistStore(store);

    return store;
  }
};

export const makeStore: MakeStore<AppState> = (context: Context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  const store = getStore(sagaMiddleware);
  // 3: Run your sagas on server
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

export const wrapper = createWrapper<AppState>(makeStore, { debug: true });
