import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function TreeIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 20"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M4 15.9A5 5 0 010 11V5a5 5 0 0110 0v6a5 5 0 01-4 4.9V19a1 1 0 01-2 0zM5 2a3 3 0 013 3v6a3 3 0 01-2 2.829V9a1 1 0 00-2 0v4.829A3 3 0 012 11V5a3 3 0 013-3z"
      />
    </svg>
  );
}

TreeIcon.displayName = 'TreeIcon';
