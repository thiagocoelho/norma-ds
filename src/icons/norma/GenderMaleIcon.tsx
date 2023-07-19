import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function GenderMaleIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.191 14.262"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M7.189 2V0l7 .007-.008 7h-2V3.418L9.137 6.462a5 5 0 11-1.429-1.4L10.772 2zm-4.31 5.141a3 3 0 110 4.243 3 3 0 010-4.243z"
      />
    </svg>
  );
}

GenderMaleIcon.displayName = 'GenderMaleIcon';
