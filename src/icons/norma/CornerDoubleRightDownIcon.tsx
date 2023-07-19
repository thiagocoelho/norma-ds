import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function CornerDoubleRightDownIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.724 18.385"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M5.056 9.892L0 5.056 4.84 0l1.445 1.383-2.357 2.462 6.034-.162a4.8 4.8 0 014.927 4.669l.159 5.926 2.247-2.294 1.429 1.4-4.9 5-5-4.9 1.4-1.429 2.427 2.377-.162-6.018a2.4 2.4 0 00-2.462-2.332l-5.9.158 2.312 2.212z" />
    </svg>
  );
}

CornerDoubleRightDownIcon.displayName = 'CornerDoubleRightDownIcon';
