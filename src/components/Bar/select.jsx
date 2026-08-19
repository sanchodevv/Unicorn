import Select from "react-select";
import { useTranslation } from "react-i18next";
import "./bar.css";

const options = [
  {
    value: "uz",
    label: (
      <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "18px" }}>
        🇺🇿
      </div>
    ),
  },
  {
    value: "en",
    selected: true,
    label: (
      <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "18px" }}>
        🇬🇧
      </div>
    ),
  },
  {
    value: "ru",
    label: (
      <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "18px" }}>
        🇷🇺
      </div>
    ),
  },
];

export default function LangSelect() {
  const { i18n } = useTranslation();
  
  const handleChange = (selectedOption) => {
    if (selectedOption) {
      i18n.changeLanguage(selectedOption.value);
    }
  };

  const defaultValue = options.find(opt => opt.value === i18n.language) || options[1];

  return (
    <Select 
      options={options} 
      defaultValue={defaultValue}
      onChange={handleChange}
      isSearchable={false}
      isClearable={false}
    />
  );
}