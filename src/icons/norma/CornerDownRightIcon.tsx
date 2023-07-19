import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function CornerDownRightIcon({
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
      <path d="M4 9.999a2 2 0 01-2-2v-8H0v8a4 4 0 004 4h10.306l-3.785 3.785 1.415 1.415 6.364-6.364-6.364-6.365-1.415 1.415 4.115 4.114z" />
    </svg>
  );
}

CornerDownRightIcon.displayName = 'CornerDownRightIcon';
