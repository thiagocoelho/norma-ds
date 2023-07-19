import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function ChartBarsIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={252.306}
      height={204.999}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        data-name="Icon metro-chart-bars"
        d="M0 173.461h252.306v31.538H0zm31.538-63.077h31.538v47.307H31.538zm47.307-63.076h31.538v110.384H78.845zm47.308 47.308h31.538v63.077h-31.538zM173.46 0h31.539v157.692H173.46z"
        fill="#333"
      />
    </svg>
  );
}

ChartBarsIcon.displayName = 'ChartBarsIcon';
