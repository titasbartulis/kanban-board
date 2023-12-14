import classNames from "classnames";
import "./Task.css";
import React from "react";

const STATUS = "ONGOING";

export default function Task({ title }) {
  return (
    <div className="task">
      <div>{title}</div>
      <div className="bottomWrapper">
        <div></div>
        <div className={classNames('status', STATUS)}>{STATUS}</div>
      </div>
    </div>
  );
}
