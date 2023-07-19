import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowLongUpEIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8.485 21.974"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M4.274 0l4.21 4.275-1.425 1.4-1.8-1.831-.07 12.117 2 .01-.029 6-6-.028.028-6 2 .009.071-12.145-1.856 1.829-1.4-1.425zM3.166 19.955l2 .01.009-2-2-.01z"
      />
    </svg>
  );
}

ArrowLongUpEIcon.displayName = 'ArrowLongUpEIcon';
