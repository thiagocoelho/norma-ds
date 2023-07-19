import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function CornerLeftUpIcon({
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
      <path d="M11.315 7.773l1.413-1.415L6.358 0 .005 6.37l1.416 1.413 3.776-3.789.008 10.306a4 4 0 004 4l8-.007v-2l-8 .007a2 2 0 01-2-2l-.01-10.636z" />
    </svg>
  );
}

CornerLeftUpIcon.displayName = 'CornerLeftUpIcon';
