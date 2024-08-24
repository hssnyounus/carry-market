import React, { createContext, useReducer } from 'react';
export default (reducers, actions, initialState) => {
    const Context = createContext();
    const Provider = (props) => {
        const [state, dispatch] = useReducer(reducers, initialState);
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }
        return (
            <Context.Provider value={{state, ...boundActions }}>
                {props.children}
            </Context.Provider>
        );
    }
    return { Context, Provider }
}