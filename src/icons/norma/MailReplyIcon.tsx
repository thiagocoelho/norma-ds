import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function MailReplyIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.004 9.913"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M6.364 8.485L4.95 9.899.002 4.949l4.95-4.95 1.414 1.414-2.5 2.5h8.136a4 4 0 014 4v2h-2v-2a2 2 0 00-2-2h-8.21z" />
    </svg>
  );
}

MailReplyIcon.displayName = 'MailReplyIcon';
