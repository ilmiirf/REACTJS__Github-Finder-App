import React, { useReducer } from "react";
import alertReducer from "./AlertReducer";
import { AlertStateType } from "../../types/alert";

const initialState: AlertStateType = {
  alert: null,
  setAlert: () => {},
};

const AlertContext = React.createContext<AlertStateType>(initialState);

export const AlertProvider = ({
  children,
}: {
  children?: React.ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: "SET_ALERT",
      payload: {
        alert: {
          msg,
          type,
        },
      },
    });
    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        ...state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
