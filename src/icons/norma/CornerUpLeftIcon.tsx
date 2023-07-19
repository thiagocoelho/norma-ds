import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function CornerUpLeftIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.322 17.177"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M7.789 11.311l-1.412 1.417L0 6.378 6.35 0l1.417 1.411-3.776 3.793 10.306-.022a4 4 0 014.009 3.991l.017 8h-2l-.017-8a2 2 0 00-2-2l-10.645.032z" />
    </svg>
  );
}

CornerUpLeftIcon.displayName = 'CornerUpLeftIcon';
