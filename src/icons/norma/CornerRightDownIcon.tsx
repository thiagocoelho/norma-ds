import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function CornerRightDownIcon({
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
      <path d="M10.005 3.998a2 2 0 00-2-2l-8 .007v-2l8-.007a4 4 0 014 4l.01 10.306 3.781-3.788 1.409 1.41-6.358 6.37-6.365-6.358 1.413-1.415 4.119 4.111z" />
    </svg>
  );
}

CornerRightDownIcon.displayName = 'CornerRightDownIcon';
