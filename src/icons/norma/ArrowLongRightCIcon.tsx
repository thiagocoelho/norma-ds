import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowLongRightCIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.96 8.485"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M17.71 0l4.25 4.236-4.235 4.25-1.417-1.412 1.814-1.821-12.288.042a3 3 0 11-.008-2l12.315-.042-1.843-1.836zM4 4.303a1 1 0 10-1 1 1 1 0 001-1z"
      />
    </svg>
  );
}

ArrowLongRightCIcon.displayName = 'ArrowLongRightCIcon';
