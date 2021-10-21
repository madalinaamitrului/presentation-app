import React from "react";
import { Link } from "react-router-dom";

interface InterfaceButton{
  mailto?:Location,
  label?:string
  }
const ButtonMail= ({ mailto, label }:InterfaceButton) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location = mailto!;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default ButtonMail;