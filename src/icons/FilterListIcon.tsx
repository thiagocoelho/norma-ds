import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function FilterListIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={247.518}
      height={165.012}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        data-name="Icon material-filter-list"
        d="M96.257 165.012h55v-27.5h-55zM0 0v27.5h247.518V0zm41.253 96.257h165.012v-27.5H41.253z"
        fill="#333"
      />
    </svg>
  );
}

FilterListIcon.displayName = 'FilterListIcon';
