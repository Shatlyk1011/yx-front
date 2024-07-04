import { SVGProps, FC } from "react";

export const ChevronIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="black" color="white" {...props}>
    <rect width="70" height="70" rx="35" fill="inherit"></rect>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.5223 17.3926H24.5674L24.5674 24.4356H31.5205L31.5205 31.4785H38.4755L38.4755 24.4355L31.5223 24.4355L31.5223 17.3926ZM38.4775 31.4785L45.4325 31.4785L45.4325 38.5215H38.4775L38.4775 31.4785ZM31.5205 38.5215H38.4755L38.4755 45.5645H31.5223L31.5223 52.6074L24.5674 52.6074L24.5674 45.5645H31.5205L31.5205 38.5215Z"
      fill="currentColor"
    ></path>
  </svg>
);
