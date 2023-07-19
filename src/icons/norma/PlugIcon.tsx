import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function PlugIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 21"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M3 0a1 1 0 00-1 1v2a1 1 0 002 0V1a1 1 0 00-1-1zM2 7h8v2a4 4 0 01-8 0zm5 7.917A6 6 0 0012 9V5H0v4a6 6 0 005 5.917V20a1 1 0 002 0zM8 1a1 1 0 012 0v2a1 1 0 01-2 0z"
      />
    </svg>
  );
}

PlugIcon.displayName = 'PlugIcon';
