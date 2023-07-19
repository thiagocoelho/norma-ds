import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function UnavailableIcon({
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
        d="M15.364 2.636a9 9 0 11-12.728 0 9 9 0 0112.728 0zm-2.172 11.971l-9.8-9.8a7 7 0 009.8 9.8zM13.95 4.05a7 7 0 01.657 9.142l-9.8-9.8a7 7 0 019.143.658z"
      />
    </svg>
  );
}

UnavailableIcon.displayName = 'UnavailableIcon';
