import Select from "react-select";
import "./bar.css";

const options = [
  {
    value: "uz",
    label: (
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <img src="./public/uzb.png" width="20" />
      </div>
    ),
  },
  {
    value: "en",
    selected: true,
    label: (
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <img src="./public/uk.png" width="20" />
      </div>
    ),
  },
  {
    value: "ru",
    label: (
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <img src="./public/rus.png" width="20" />
      </div>
    ),
  },
];
const defaultValue = options[1];

export default function LangSelect() {
  return <Select options={options} defaultValue={defaultValue} />;
}