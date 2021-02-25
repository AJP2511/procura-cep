import React, { useContext, useState } from "react";
import {
  MainContainer,
  SwitchContainer,
  TextContainer,
  InternalSwitchContainer,
} from "../styles/components/Header.styled";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { GlobalContext } from "../context/GlobalContext";

const Header = () => {
  const color = useContext(ThemeContext);
  const { setTheme, theme } = useContext(GlobalContext);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    if (theme === "dark") {
      setTheme("light");
      setIsChecked(true);
    } else {
      setTheme("dark");
      setIsChecked(false);
    }
  };

  return (
    <MainContainer>
      <SwitchContainer>
        Dark
        <InternalSwitchContainer>
          <Switch
            checked={isChecked}
            onChange={handleChange}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor={color.onBtn}
            offColor={color.offBtn}
          />
        </InternalSwitchContainer>
        Light
      </SwitchContainer>
      <TextContainer>
        <h3>Verificador de CEP</h3>
      </TextContainer>
    </MainContainer>
  );
};

export default Header;
