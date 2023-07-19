import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function WorkAltIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 17"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M14 3a3 3 0 00-3-3H7a3 3 0 00-3 3H3a3 3 0 00-3 3v8a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm-3-1H7a1 1 0 00-1 1h6a1 1 0 00-1-1zM3 5h12a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z"
      />
    </svg>
  );
}

WorkAltIcon.displayName = 'WorkAltIcon';
