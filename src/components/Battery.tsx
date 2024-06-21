import "../styles/_battery.scss";

type TSize = "small" | "medium" | "big";

interface IBatteryProps {
  size?: TSize;
}

const getSizeMultiplicator = (size: TSize = "medium") => {
  let res = 1;
  if (size === "small") {
    res = 0.6;
  } else if (size === "big") {
    res = 1.4;
  }
  return res;
};

export default function Battery(props: IBatteryProps) {
  return (
    <div
      className="battery"
      style={{
        height: getSizeMultiplicator(props.size) * 40 + "px",
        width: getSizeMultiplicator(props.size) * 20 + "px"
      }}
    >
      <div className="battery-box" />
      <div className="battery-bottom">
        <div className="battery-plus">+</div>
      </div>
      <div className="battery-tetine"></div>
    </div>
  );
}
