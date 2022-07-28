import { FC, ReactNode, Dispatch, useReducer, createContext } from 'react';
import { Action } from '../actions';
import reducers, { initialState, RepositoriesState } from '../reducers';

interface Props {
   children: ReactNode;
}

interface AppContextType {
   state: RepositoriesState;
   dispatch: Dispatch<Action>;
}

const contextDefaultValue: AppContextType = {
   state: initialState,
   dispatch: () => initialState
}

export const AppContext = createContext<AppContextType>(contextDefaultValue);

export const Provider: FC<Props> = ({ children }) => {
   const [state, dispatch] = useReducer(reducers, initialState);

   return <AppContext.Provider value={{ state, dispatch }}>
      {children}
   </AppContext.Provider>
};