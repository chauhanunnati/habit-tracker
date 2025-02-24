import React from "react";

interface AppIconProps {
  width?: string;
  height?: string;
  color?: string;
}

const AppIcon: React.FC<AppIconProps> = ({ width = "16", height = "16", color = "#000000" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_iconCarrier">
        <path d="M11 1H1V3H11V1Z" fill={color} />
        <path d="M1 5H15V7H1V5Z" fill={color} />
        <path d="M11 9H1V11H11V9Z" fill={color} />
        <path d="M15 13H1V15H15V13Z" fill={color} />
      </g>
    </svg>
  );
};

export default AppIcon;