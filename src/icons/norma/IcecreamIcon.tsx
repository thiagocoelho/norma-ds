import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function IcecreamIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 22"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M10 16h4V7A7 7 0 000 7v9h4v3a3 3 0 006 0zm2-2V7A5 5 0 002 7v7h4v5a1 1 0 002 0v-5z"
      />
    </svg>
  );
}

IcecreamIcon.displayName = 'IcecreamIcon';
