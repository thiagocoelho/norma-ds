import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function CornerUpRightIcon({
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
      <path d="M10.533 11.311l1.411 1.417 6.378-6.35L11.972 0l-1.417 1.411 3.776 3.793-10.305-.022A4 4 0 00.017 9.173l-.017 8h2l.017-8a2 2 0 012-2l10.636.023z" />
    </svg>
  );
}

CornerUpRightIcon.displayName = 'CornerUpRightIcon';
