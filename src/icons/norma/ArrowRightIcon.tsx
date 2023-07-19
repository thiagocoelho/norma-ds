import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowRightIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17.416 11.314"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M11.746 0l-1.411 1.418 3.27 3.255L0 4.687v2l13.568-.014-3.215 3.23 1.418 1.411 5.644-5.67z" />
    </svg>
  );
}

ArrowRightIcon.displayName = 'ArrowRightIcon';
