import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function PocketIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 20"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M2 2h18v7A9 9 0 012 9zM0 0h22v9A11 11 0 010 9zm10.293 12.693a1 1 0 001.414 0L15.95 8.45a1 1 0 00-1.414-1.414L11 10.572 7.464 7.037A1 1 0 006.05 8.451z"
      />
    </svg>
  );
}

PocketIcon.displayName = 'PocketIcon';
