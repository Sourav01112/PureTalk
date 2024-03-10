// Filename - Components/Switcher.js

import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkMode";

export default function SwitchTheme() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === "dark");

    const toggleDarkMode = (checked) => {
        setTheme(checked ? "dark" : "light");
        setDarkSide(checked);
        console.log('checked', checked, darkSide);

    };

    return (
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={26}/>
    );
}
