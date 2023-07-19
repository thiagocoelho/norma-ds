import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function UnblockIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M2.636 15.364a9 9 0 100-12.728 9 9 0 000 12.728zm2.171-.757a7 7 0 009.8-9.8l-2.778 2.778a1 1 0 01-1.414-1.414l2.778-2.778a7 7 0 00-9.8 9.8l2.778-2.778a1 1 0 011.414 1.414z"
      />
    </svg>
  );
}

UnblockIcon.displayName = 'UnblockIcon';
