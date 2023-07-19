import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function CornerDownLeftIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.299 17.199"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M14.299 9.999a2 2 0 002-2v-8h2v8a4 4 0 01-4 4H3.994l3.785 3.785-1.415 1.415L0 10.834 6.364 4.47l1.414 1.414-4.114 4.115z" />
    </svg>
  );
}

CornerDownLeftIcon.displayName = 'CornerDownLeftIcon';
