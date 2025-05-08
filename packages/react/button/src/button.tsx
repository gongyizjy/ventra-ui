import React, { MouseEvent } from "react";
import classNames from "classnames";
import "./button.scss";

type PresetColors =
  | "blue"
  | "purple"
  | "cyan"
  | "green"
  | "magenta"
  | "pink"
  | "red"
  | "orange"
  | "yellow"
  | "volcano"
  | "geekblue"
  | "lime"
  | "gold";
interface ButtonProps {
  type?: "primary" | "default" | "dashed" | "text" | "link";
  size?: "small" | "medium" | "large";
  shape?: "default" | "circle" | "round";
  htmlType?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  loading?: boolean | { delay?: number; icon?: React.ReactNode };
  color?: "default" | "primary" | "danger" | PresetColors;
  autoInsertSpace?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  herf?: string;
  children?: React.ReactNode;
}
export default function Button({
  children,
  type = "default",
  size = "medium",
  htmlType = "button",
  onClick,
  loading = false,
  shape = "default",
  color = "default",
  autoInsertSpace = true,
  disabled = false,
  icon = null,
  iconPosition = "start",
  herf,
}: ButtonProps) {

  return (
    <button
      className={classNames("ventra-btn", {
        [`ventra-btn-${type}`]: type,
        "ventra-btn-variant-solid": type === "primary",
        "ventra-btn-variant-outlined": type === "default",
        "ventra-btn-variant-text": type === "text",
        "ventra-btn-variant-link": type === "link",
        "ventra-btn-variant-dashed": type === "dashed",
        "ventra-btn-color-default": type !== "primary" || "link",
        "ventra-btn-color-primary": type === "primary",
        "ventra-btn-color-link": type === "link",
        [`ventra-btn-lg`]: size === "large",
        [`ventra-btn-sm`]: size === "small",
      })}
      type={htmlType}
      disabled={disabled}
    >
      {icon && iconPosition === "start" && (
        <span className="ventra-btn-icon">{icon}</span>
      )}
      <span style={{ color: color }}>{children}</span>
      {icon && iconPosition === "end" && (
        <span className="ventra-btn-icon">{icon}</span>
      )}
    </button>
  );
}
