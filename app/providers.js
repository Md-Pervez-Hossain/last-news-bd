"use client"
import { store } from "@/redux/store";
import { Provider } from "react-redux";
export const UseRedux = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}