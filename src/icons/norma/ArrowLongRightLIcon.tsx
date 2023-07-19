import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowLongRightLIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.332 8.485"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M18.082 0l4.25 4.236-4.236 4.25-1.417-1.412 1.819-1.825-16.5.022v2h-2v-6h2v2l16.509-.022-1.841-1.832z" />
    </svg>
  );
}

ArrowLongRightLIcon.displayName = 'ArrowLongRightLIcon';
