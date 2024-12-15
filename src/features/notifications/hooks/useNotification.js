import { NotificationContext } from "../NotificationProvider";
import { useContext } from "react";

export const useNotification = () => {
  return useContext(NotificationContext);
};
