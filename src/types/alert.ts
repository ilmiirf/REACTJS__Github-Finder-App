type AlertType = {
  msg: string;
  type: string;
};
export type AlertStateType = {
  alert?: AlertType | null;
  setAlert: (msg: string, type: string) => void;
};
