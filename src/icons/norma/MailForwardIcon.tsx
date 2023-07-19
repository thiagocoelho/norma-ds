import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function MailForwardIcon({
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
      <path d="M9.64 8.485l1.414 1.414 4.948-4.95-4.95-4.95L9.64 1.414l2.5 2.5H4.002a4 4 0 00-4 4v2h2v-2a2 2 0 012-2h8.21z" />
    </svg>
  );
}

MailForwardIcon.displayName = 'MailForwardIcon';
