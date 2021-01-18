import React, { useContext } from "react";
import { MyContext } from "../MyProvider";

export default function BlogPost({ content }) {
    const { theme, setTheme } = useContext(MyContext);

    return (
        <div>
            <button onClick={()=>setTheme("Some Other Text")}>
            Change Text
            </button>
            <p>{theme}</p>
        </div>

    );
}