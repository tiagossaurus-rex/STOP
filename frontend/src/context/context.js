import React, { useReducer, useContext, createContext, useEffect } from 'react';

import {
    useActions,
    reducer,
    initialState,
} from './';

const AppContext = createContext();

export const AppContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState());
    const actions = useActions(state, dispatch);

    useEffect(() => {
        console.log('[AppContextProvider] state: ', state)
    }, [state]);

    const value = {
        state,
        actions,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);
