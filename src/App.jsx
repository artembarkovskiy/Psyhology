import "./App.css";
import AppRouter from "./routes/AppRouter";
import { NotificationProvider } from "./features/notifications/NotificationProvider";

const App = () => {
  return (
    <NotificationProvider>
      <AppRouter />
    </NotificationProvider>
  );
};

export default App;
