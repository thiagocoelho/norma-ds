import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function FileIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 20"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M0 3a3 3 0 013-3h8a7 7 0 017 7v10a3 3 0 01-3 3H3a3 3 0 01-3-3zm10-1H3a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1V7h-6zm5.584 3A5.009 5.009 0 0012 2.1V5z"
      />
    </svg>
  );
}

FileIcon.displayName = 'FileIcon';
