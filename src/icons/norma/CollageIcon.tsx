import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function CollageIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 20"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M0 3a3 3 0 013-3h10a3 3 0 013 3v14a3 3 0 01-3 3H3a3 3 0 01-3-3zm9-1h4a1 1 0 011 1v8H9zm0 11v5h4a1 1 0 001-1v-4zM7 2H3a1 1 0 00-1 1v3h5zM2 17V8h5v10H3a1 1 0 01-1-1z"
      />
    </svg>
  );
}

CollageIcon.displayName = 'CollageIcon';
