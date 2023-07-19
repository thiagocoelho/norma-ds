import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function CameraIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 15"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M4 0v2h8v1H3a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 002.99-2.751L24 13V5l-6.01.751A3 3 0 0015 3h-1V1a1 1 0 00-1-1zm14 7.766v2.469l4 .5V7.266zM16 6a1 1 0 00-1-1H3a1 1 0 00-1 1v6a1 1 0 001 1h12a1 1 0 001-1z"
      />
    </svg>
  );
}

CameraIcon.displayName = 'CameraIcon';
