import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function AttachmentIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 24"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M9 0a5 5 0 015 5v12a7 7 0 01-14 0V9h2v8a5 5 0 0010 0V5a3 3 0 00-6 0v12a1 1 0 002 0V6h2v11a3 3 0 01-6 0V5a5 5 0 015-5z" />
    </svg>
  );
}

AttachmentIcon.displayName = 'AttachmentIcon';
