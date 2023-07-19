import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowsHAltIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 8.485"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M4.243 0l1.414 1.415-1.829 1.828h16.344l-1.829-1.828L19.757.001 24 4.243l-4.243 4.243-1.414-1.414 1.828-1.829H3.828l1.828 1.828-1.413 1.415L0 4.243z" />
    </svg>
  );
}

ArrowsHAltIcon.displayName = 'ArrowsHAltIcon';
