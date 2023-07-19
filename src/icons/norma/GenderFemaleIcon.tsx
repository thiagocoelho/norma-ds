import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function GenderFemaleIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 18"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M5 0a5 5 0 00-1 9.9V12H1v2h3v4h2v-4h3v-2H6V9.9A5 5 0 005 0zM2 5a3 3 0 103-3 3 3 0 00-3 3z"
      />
    </svg>
  );
}

GenderFemaleIcon.displayName = 'GenderFemaleIcon';
