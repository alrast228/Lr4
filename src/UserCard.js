import React from "react";

function UserCard(props) {
    return <h2>Привет, {props.name}! Ваш возраст {props.age}.</h2>;
}

export default UserCard;
