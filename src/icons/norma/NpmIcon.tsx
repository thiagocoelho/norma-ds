import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function NpmIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M2 18a2 2 0 01-2-2V2a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zm1-3V3h12v12h-3V6H9v9z"
      />
    </svg>
  );
}

NpmIcon.displayName = 'NpmIcon';
