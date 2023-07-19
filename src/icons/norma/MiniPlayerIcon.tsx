import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function MiniPlayerIcon({
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
        d="M0 3a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H3a3 3 0 01-3-3zm3-1h12a1 1 0 011 1v6.268A1.991 1.991 0 0015 9h-4a2 2 0 00-2 2v4a1.991 1.991 0 00.268 1H3a1 1 0 01-1-1V3a1 1 0 011-1z"
      />
    </svg>
  );
}

MiniPlayerIcon.displayName = 'MiniPlayerIcon';
