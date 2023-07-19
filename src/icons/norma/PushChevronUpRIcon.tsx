import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function PushChevronUpRIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M4 20h14a2 2 0 002-2V4a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2zm-4-2a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H4a4 4 0 00-4 4zm8.172-2.288L6.757 14.3 11 10.055l4.243 4.245-1.414 1.414L11 12.883zM7 9h8V7H7z"
      />
    </svg>
  );
}

PushChevronUpRIcon.displayName = 'PushChevronUpRIcon';
