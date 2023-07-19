import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowLongUpLIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8.485 21.963"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M4.274 0l4.21 4.275L7.06 5.681l-1.8-1.826-.052 16.11h2v2h-6v-2h2L3.26 3.807 1.403 5.635.003 4.21z" />
    </svg>
  );
}

ArrowLongUpLIcon.displayName = 'ArrowLongUpLIcon';
