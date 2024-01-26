import React, { useState } from "react";
import "./navbar.css";

import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import closemenu from "../images/icon-close-menu.svg";
import arrowdown from "../images/icon-arrow-down.svg";
import arrowup from "../images/icon-arrow-up.svg";
import todo from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";

import Dropdown from "./Dropdown";
import Button from "./Button";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const items = [
    {
      name: "Features",
      icon: arrowdown,
      altIcon: arrowup,
      class: "features_class",
      innerItem: [
        { name: "Todo List", icon: todo },
        { name: "Calendar", icon: calendar },
        { name: "Reminder", icon: reminders },
        { name: "Planning", icon: planning },
      ],
    },
    {
      name: "Company",
      icon: arrowdown,
      altIcon: arrowup,
      class: "company_class",
      innerItem: [{ name: "History" }, { name: "Our Team" }, { name: "Blog" }],
    },
    { name: "Careers" },
    { name: "About" },
  ];

  return (
    <div className="try">
      <navbar>
        <img src={logo} alt="logo" />
        <div
          className={click ? "navbar_items navBar_items_mob" : "navbar_items"}
        >
          <img
            onClick={() => {
              setClick(false);
            }}
            className="close_menu"
            src={closemenu}
          />
          <ul className="navbar_ul">
            {items.map((item, idx) => {
              return (
                <li className="navbar_li" key={idx}>
                  <Dropdown
                    name={item.name}
                    icon={item.icon}
                    class={item.class}
                    altIcon={item.altIcon}
                    childItems={item.innerItem}
                  />
                </li>
              );
            })}
          </ul>
          <div className="info_btn">
            <Button class="login" name="Login" />
            <Button class="register" name="Register" />
          </div>
        </div>
        <img
          onClick={() => {
            setClick(true);
          }}
          className="menu_btn"
          src={menu}
          alt="menu"
        />
      </navbar>
    </div>
    // <navbar>
    //   <img src={logo} alt="logo" />
    //   <div className={click ? "navbar_items navBar_items_mob" : "navbar_items"}>
    //     <img
    //       onClick={() => {
    //         setClick(false);
    //       }}
    //       className="close_menu"
    //       src={closemenu}
    //     />
    //     <ul className="navbar_ul">
    //       {items.map((item, idx) => {
    //         return (
    //           <li className="navbar_li" key={idx}>
    //             <Dropdown
    //               name={item.name}
    //               icon={item.icon}
    //               class={item.class}
    //               altIcon={item.altIcon}
    //               childItems={item.innerItem}
    //             />
    //           </li>
    //         );
    //       })}
    //     </ul>
    //     <div className="info_btn">
    //       <Button class="login" name="Login" />
    //       <Button class="register" name="Register" />
    //     </div>
    //   </div>
    //   <img
    //     onClick={() => {
    //       setClick(true);
    //     }}
    //     className="menu_btn"
    //     src={menu}
    //     alt="menu"
    //   />
    // </navbar>
  );
}
