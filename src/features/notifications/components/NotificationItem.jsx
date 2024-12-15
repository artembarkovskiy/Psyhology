const NotificationItem = ({ id, message, type, onRemove }) => {
  return (
    <div
      style={{
        marginBottom: "10px",
        padding: "10px 15px",
        borderRadius: "5px",
        backgroundColor:
          type === "success" ? "green" : type === "error" ? "red" : "gray",
        color: "white",
        cursor: "pointer",
      }}
      onClick={() => onRemove(id)}
    >
      {message}
    </div>
  );
};

export default NotificationItem;
