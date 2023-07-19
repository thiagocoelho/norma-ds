import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function PentagonDownIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 12.5"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M5 2L0 0v10l5 2.5 5-2.5V0zm3 .954l-3 1.2-3-1.2v5.81l3 1.5 3-1.5z"
      />
    </svg>
  );
}

PentagonDownIcon.displayName = 'PentagonDownIcon';
