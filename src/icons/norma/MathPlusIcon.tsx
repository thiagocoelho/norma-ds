import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function MathPlusIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M8 0a1 1 0 00-1 1v6H1a1 1 0 000 2h6v6a1 1 0 002 0V9h6a1 1 0 000-2H9V1a1 1 0 00-1-1z" />
    </svg>
  );
}

MathPlusIcon.displayName = 'MathPlusIcon';
