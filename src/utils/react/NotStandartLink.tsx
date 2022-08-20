import React from "react";
import { preventDefault } from "./preventDefault";
import { stopPropagation } from "./stopPropagation";

//----//
function NotStandartLink(props: any) {
  return (
    <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
  );

  // const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   props.onClick();
  // }
  // return (
  //   <a onClick={handleClick}>Hello</a>
  // )
}
