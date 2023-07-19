import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function HeartIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20.928 18.252"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M10.476 2.698L9.389 1.611a5.5 5.5 0 00-7.778 7.778l8.839 8.837.026.026 8.839-8.839a5.5 5.5 0 00-7.778-7.778zm-.024 12.7l4.936-4.936 1.451-1.4L17.901 8a3.5 3.5 0 00-4.95-4.95l-2.474 2.476-.007-.007-2.495-2.493a3.5 3.5 0 00-4.95 4.95l2.539 2.538z"
      />
    </svg>
  );
}

HeartIcon.displayName = 'HeartIcon';
