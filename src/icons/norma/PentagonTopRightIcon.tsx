import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function PentagonTopRightIcon({
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
        d="M5.33 9.428L0 8.66 5 0l5.33.768L13.66 5l-5 8.66zm3.075.674l-2-2.539-3.2-.461 2.85-4.934 3.2.461 2 2.539z"
      />
    </svg>
  );
}

PentagonTopRightIcon.displayName = 'PentagonTopRightIcon';
