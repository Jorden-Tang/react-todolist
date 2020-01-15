import React, {useState, createContext} from 'react'

const UserContext = createContext({});
export const UserProvider = UserContext.Provider
export const UserConsumner = UserContext.Consumer
export default UserContext
