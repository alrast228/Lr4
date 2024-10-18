import React, { useState } from "react";

function ChangeText() {
    const [text, setText]=useState("Ляляля");
    function ReverseText() {
        if (text=="Ляляля") {setText("Привет")}
        else {setText("Ляляля")}
    }
    return (
        <div>
            <p>Здравствуйте {text}</p>
            <button onClick={ReverseText}>Нажми меня</button>
        </div>
    )
}
export default ChangeText;