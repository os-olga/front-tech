import AddIcon from "@mui/icons-material/Add";

const OutputInput = ({ value, handleRemoveItem, index, view }) => {
  return (
    <span
      style={
        view
          ? { ...styles.block, padding: "8px", paddingRight: "40px" }
          : { ...styles.block, padding: "0 8px" }
      }
    >
      {value.title}
      {view && (
        <button
          style={styles.removeButton}
          onClick={() => handleRemoveItem(index)}
        >
          <AddIcon sx={styles.removeIcon} />
        </button>
      )}
    </span>
  );
};

const styles = {
  block: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyItems: "start",
    border: "1px solid #29CC8F",
    borderRadius: "31px",
    height: "27px",
    marginRight: "10px",
    padding: "12px 28px 13px 8px",
  },
  removeButton: {
    fontSize: "18px",
    position: "absolute",
    right: "6px",
    top: "8px",
    border: "none",
    borderLeft: "1px solid #29CC8F",
    height: "25px",
  },
  removeIcon: {
    transform: "rotate(45deg)",
    color: "#9C9C9C",
  },
};

export default OutputInput;
