import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function TrendingDownIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.627 10.607"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M1.414.707L0 2.121l7.071 7.071 6.364-6.364 4.243 4.243-1.742 1.742 6.692 1.793-1.793-6.692-1.742 1.742L13.435.001 7.071 6.364z" />
    </svg>
  );
}

TrendingDownIcon.displayName = 'TrendingDownIcon';
