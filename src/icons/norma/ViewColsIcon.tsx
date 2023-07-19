import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ViewColsIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 14"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M0 3a3 3 0 013-3h14a3 3 0 013 3v8a3 3 0 01-3 3H3a3 3 0 01-3-3zm14-1h3a1 1 0 011 1v8a1 1 0 01-1 1h-3zm-2 0H8v10h4zM6 12V2H3a1 1 0 00-1 1v8a1 1 0 001 1z"
      />
    </svg>
  );
}

ViewColsIcon.displayName = 'ViewColsIcon';
