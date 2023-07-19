import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowLongLeftRIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23.202 8.549"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M4.25 0L.001 4.236l4.236 4.25 1.415-1.411-1.814-1.82 11.866.041 3.256 3.256 4.241-4.245L18.959.064l-3.23 3.23-11.91-.041 1.843-1.836zm13.3 4.307l1.414-1.414 1.414 1.414-1.414 1.414z"
      />
    </svg>
  );
}

ArrowLongLeftRIcon.displayName = 'ArrowLongLeftRIcon';
