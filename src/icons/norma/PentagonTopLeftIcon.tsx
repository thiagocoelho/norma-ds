import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function PentagonTopLeftIcon({
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
        d="M8.33 9.428L5 13.66 0 5 3.33.768 8.66 0l5 8.66zm2.121-2.326l-3.2.461-2 2.539-2.842-4.934 2-2.539 3.2-.461z"
      />
    </svg>
  );
}

PentagonTopLeftIcon.displayName = 'PentagonTopLeftIcon';
