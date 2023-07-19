import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowLongUpCIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8.485 21.959"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M0 4.211L4.275.001l4.21 4.275L7.06 5.68l-1.8-1.831-.071 12.288a3 3 0 11-2-.01L3.256 3.81 1.403 5.636zM4.175 17.96a1 1 0 101 1 1 1 0 00-1-1z"
      />
    </svg>
  );
}

ArrowLongUpCIcon.displayName = 'ArrowLongUpCIcon';
