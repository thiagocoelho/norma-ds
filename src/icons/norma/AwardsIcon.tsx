import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function AwardsIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 20"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M14 7a6.992 6.992 0 01-3 5.745V20H8.414L7 18.586 5.586 20H3v-7.255A7 7 0 1114 7zm-2 0a5 5 0 11-5-5 5 5 0 015 5zM5 17.757l2-2 2 2V13.71a7.044 7.044 0 01-4 0z"
      />
    </svg>
  );
}

AwardsIcon.displayName = 'AwardsIcon';
