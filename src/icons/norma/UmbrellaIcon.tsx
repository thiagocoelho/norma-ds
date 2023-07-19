import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function UmbrellaIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 22"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M0 8a8 8 0 0116 0v2H9.019v9.5a2.5 2.5 0 01-5 0v-2.643h2V19.5a.5.5 0 001 0V10H0zm8-6a6 6 0 016 6H2a6 6 0 016-6z"
      />
    </svg>
  );
}

UmbrellaIcon.displayName = 'UmbrellaIcon';
