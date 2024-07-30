export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, right: "5px", display: "block", background: "transparent" }}
        onClick={onClick}
      />
    );
  }
  
export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, left: "5px", display: "block", background: "transparent", zIndex: "2" }}
            onClick={onClick}
        />
    );
}