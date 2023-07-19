import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function CornerLeftDownIcon({
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
      <path d="M7.205 3.998a2 2 0 012-2l8 .007v-2l-8-.007a4 4 0 00-4 4l-.01 10.306-3.779-3.79-1.411 1.412 6.358 6.37 6.37-6.358-1.418-1.415-4.118 4.111z" />
    </svg>
  );
}

CornerLeftDownIcon.displayName = 'CornerLeftDownIcon';
