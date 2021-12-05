import { useState } from "react";
import Switch from "react-switch";
import { useTheme } from "../config/useTheme";
import { CheckedIcon, Dark } from "./Icons";

const ThemeSwitcher = ({ themeSwitcher, theme }: any) => {
  const [status, setStatus] = useState(false);

  const handleChange = (checked: boolean) => {
    setStatus(checked);
    if (theme.name === "Sea Wave") {
      themeSwitcher("light");
    } else {
      themeSwitcher("seaWave");
    }
  };

  return (
    <label>
      <label htmlFor="small-radius-switch">
        <Switch
          checked={status}
          onChange={handleChange}
          handleDiameter={28}
          offColor="green"
          onColor="green"
          offHandleColor="#0ff"
          onHandleColor="#08f"
          height={40}
          width={70}
          borderRadius={6}
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                color: "orange",
                paddingRight: 2,
              }}
            >
              <Dark />
            </div>
          }
          checkedIcon={<CheckedIcon />}
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 20,
              }}
            >
              <CheckedIcon />
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "red",
                fontSize: 18,
              }}
            >
              <Dark />
            </div>
          }
          className="react-switch"
          id="small-radius-switch"
        />
      </label>
    </label>
  );
};
export default ThemeSwitcher;
