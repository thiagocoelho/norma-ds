import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function PaypalIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.25 16.911"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M3.023 0h8a4.04 4.04 0 013.63 1.971 4 4 0 011.512 4.138 6.294 6.294 0 01-5.945 4.91h-2l-1.137 5.892h-4.13l.231-1.2H0zm1.622 1.964h6a2.384 2.384 0 012.433 2.946 3.776 3.776 0 01-3.566 2.946h-4l-1.134 5.892h-2z"
      />
    </svg>
  );
}

PaypalIcon.displayName = 'PaypalIcon';
