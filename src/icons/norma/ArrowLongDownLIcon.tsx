import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowLongDownLIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8.485 22.056"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M1.243 0v2h2l.014 16.241-1.846-1.834L0 17.828l4.255 4.231 4.231-4.255-1.418-1.41-1.812 1.822L5.243 2h2V0z" />
    </svg>
  );
}

ArrowLongDownLIcon.displayName = 'ArrowLongDownLIcon';
