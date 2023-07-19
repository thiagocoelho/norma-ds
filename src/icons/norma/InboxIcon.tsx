import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function InboxIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20.005"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M0 3a3 3 0 013-3h14a3 3 0 013 3v15a2 2 0 01-2 2H6.148q-.073.005-.148.005H2a2 2 0 01-2-2zm3-1h14a1 1 0 011 1v9h-4a2 2 0 00-2 2v1H8v-.995a2 2 0 00-2-2H2V3a1 1 0 011-1z"
      />
    </svg>
  );
}

InboxIcon.displayName = 'InboxIcon';
