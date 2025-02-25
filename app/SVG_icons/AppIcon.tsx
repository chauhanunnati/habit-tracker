import React from "react";

interface AppIconProps {
  width?: string;
  height?: string;
  color?: string;
}

const AppIcon: React.FC<AppIconProps> = ({ width = "16", height = "16", color = "#061251" }) => {
  return (
    <svg
      viewBox="-1.6 -1.6 19.20 19.20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0">
        <rect
          x="-1.6"
          y="-1.6"
          width="19.20"
          height="19.20"
          rx="0"
          fill="#061251ffffff"
          strokeWidth="0"
        />
      </g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"></g>
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