import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowLongLeftCIcon({
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
        d="M4.25 0L0 4.236l4.236 4.25 1.417-1.412-1.815-1.821 12.288.042a3 3 0 10.008-2L3.819 3.253l1.843-1.836zm13.71 4.3a1 1 0 111 1 1 1 0 01-1-.997z"
      />
    </svg>
  );
}

ArrowLongLeftCIcon.displayName = 'ArrowLongLeftCIcon';
