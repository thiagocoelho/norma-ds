import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function PentagonBottomRightIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13.66 13.66"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M5.33 4.232L8.66 0l5 8.66-3.33 4.232L5 13.66 0 5zM3.209 6.558l3.2-.461 2-2.539 2.846 4.929-2 2.539-3.2.461z"
      />
    </svg>
  );
}

PentagonBottomRightIcon.displayName = 'PentagonBottomRightIcon';
