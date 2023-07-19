import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowLongLeftLIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.062 8.486"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M4.239 0L0 4.243l4.246 4.24 1.413-1.415L3.84 5.255l16.213.018v2h2l.012-6h-2l-.006 2.989v-.989L3.816 3.255l1.839-1.842z" />
    </svg>
  );
}

ArrowLongLeftLIcon.displayName = 'ArrowLongLeftLIcon';
