import React from 'react'
import Action from '../../../contracts/Action'
import { CategoriesState, initState, reducer } from '../state'
interface CategoriesContextProps {
    state:CategoriesState,
    dispatch:React.Dispatch<Action>
}
export const Context = React.createContext<CategoriesContextProps>(
  {} as CategoriesContextProps
)

export const CategoriesProvider = ({ children }:React.PropsWithChildren<{}>) => {
  const [state, dispatch] = React.useReducer(reducer, initState)
  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export const useCategoriesState = () => {
  return React.useContext(Context)
}
