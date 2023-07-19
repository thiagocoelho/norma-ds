import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function CornerRightUpIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17.21 18.296"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M5.895 7.773L4.482 6.358 10.852 0l6.353 6.37-1.41 1.413-3.782-3.789-.008 10.306a4 4 0 01-4 4l-8-.007v-2l8 .007a2 2 0 002-2l.01-10.636z" />
    </svg>
  );
}

CornerRightUpIcon.displayName = 'CornerRightUpIcon';
