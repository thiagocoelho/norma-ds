import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowUpIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11.314 17.416"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M11.314 5.67L9.897 7.081 6.641 3.808l-.014 13.605h-2l.014-13.568-3.23 3.215L0 5.644 5.67 0z" />
    </svg>
  );
}

ArrowUpIcon.displayName = 'ArrowUpIcon';
