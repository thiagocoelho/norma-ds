import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function PexelsIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11 14"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M6 0a5 5 0 110 10v4H0V0zM2 2v10h2V8h2a2.993 2.993 0 003.041-3.044l-.007-.389A2.61 2.61 0 006.326 2H6z"
      />
    </svg>
  );
}

PexelsIcon.displayName = 'PexelsIcon';
