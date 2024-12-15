import NotificationItem from "./NotificationItem";

const NotificationList = ({ notifications, onRemove }) => {
  return (
    <div style={{ position: "fixed", top: 10, right: 10, zIndex: 1000 }}>
      {notifications.map(({ id, message, type }) => (
        <NotificationItem
          key={id}
          id={id}
          message={message}
          type={type}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default NotificationList;
