import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function PrinterIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M6 2h8v2H6zm10 2h4v12h-4v4H4v-4H0V4h4V0h12zm2 10h-2v-2H4v2H2V6h16zM6 14h8v4H6zm0-6H4v2h2z"
      />
    </svg>
  );
}

PrinterIcon.displayName = 'PrinterIcon';
