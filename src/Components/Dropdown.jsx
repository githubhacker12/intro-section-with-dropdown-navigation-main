import React, { useState } from "react";

export default function Dropdown(props) {
  const [click, setClick] = useState(true);

  return (
    <dropdown>
      <div className="dropdown_head" onClick={() => setClick(!click)}>
        <p>{props.name}</p>
        {props.icon && (
          <img src={click ? props.icon : props.altIcon} alt="arrowdown" />
        )}
      </div>
      {props.childItems && !click && (
        <ul className={props.class}>
          {props.childItems.map((item, idx) => (
            <li key={idx}>
              {item.icon && <img src={item.icon} />}
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </dropdown>
  );
}
