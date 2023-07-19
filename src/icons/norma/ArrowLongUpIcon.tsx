import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowLongUpIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8.485 21.966"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M4.274 0L0 4.211l1.4 1.425 1.862-1.831-.055 18.155 2 .006.054-18.113 1.8 1.826 1.425-1.4z" />
    </svg>
  );
}

ArrowLongUpIcon.displayName = 'ArrowLongUpIcon';
