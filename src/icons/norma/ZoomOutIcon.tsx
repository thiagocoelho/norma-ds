import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ZoomOutIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.899 18.899"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M12.242 12.243a6 6 0 10-8.485 0 6 6 0 008.485 0zm1.414-9.9a8 8 0 01.662 10.564l.045.042 4.243 4.243a1 1 0 01-1.414 1.414l-4.243-4.242-.042-.045a8 8 0 11.749-11.976zM3.999 7v2h8V7z"
      />
    </svg>
  );
}

ZoomOutIcon.displayName = 'ZoomOutIcon';
