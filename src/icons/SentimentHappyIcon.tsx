import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function SentimentHappyIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={246.479}
      height={246.479}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M123.116 0a123.24 123.24 0 10123.363 123.24A123.1 123.1 0 00123.116 0zm.123 221.831a98.592 98.592 0 1198.592-98.592 98.564 98.564 0 01-98.591 98.592zm12.324-123.979l13.063 13.063 13.064-13.063 13.063 13.063 13.063-13.063-26.126-26.127zm-50.775 0l13.063 13.063 13.063-13.063-26.125-26.127-26.127 26.127 13.063 13.063zm38.451 93.169a67.735 67.735 0 0062.975-43.134H60.264a67.735 67.735 0 0062.976 43.134z"
        fill="#333"
      />
    </svg>
  );
}

SentimentHappyIcon.displayName = 'SentimentHappyIcon';
