import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ReadIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 8"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M6 6a2 2 0 10-2-2 2 2 0 002 2zm3.465-4a4 4 0 00-7.339 1H1a1 1 0 000 2h1.126A4 4 0 0010 4h2a4 4 0 007.874 1H21a1 1 0 000-2h-1.126a4 4 0 00-7.339-1zM14 4a2 2 0 102-2 2 2 0 00-2 2z"
      />
    </svg>
  );
}

ReadIcon.displayName = 'ReadIcon';
