import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function PresentationIcon({
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
        d="M10 20A10 10 0 100 10a10 10 0 0010 10zm8-10h-2a6 6 0 00-12 0H2a8 8 0 0116 0zM2.252 12h15.5a8 8 0 01-15.5 0zM6 10a4 4 0 018 0z"
      />
    </svg>
  );
}

PresentationIcon.displayName = 'PresentationIcon';
