import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function FolderIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 21"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M4 0a2 2 0 00-2 2v1q0 .085.007.168A3 3 0 000 6v12a3 3 0 003 3h18a3 3 0 003-3V6a3 3 0 00-3-3h-9.126A4 4 0 008 0zm5.732 3A2 2 0 008 2H4v1zM3 5a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V6a1 1 0 00-1-1z"
      />
    </svg>
  );
}

FolderIcon.displayName = 'FolderIcon';
