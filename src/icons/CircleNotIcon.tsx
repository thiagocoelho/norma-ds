import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function CircleNotIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={252.338}
      height={248.874}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        data-name="Icon material-block"
        d="M126.169 0C56.524 0 0 55.748 0 124.437s56.524 124.437 126.169 124.437 126.169-55.748 126.169-124.437S195.814 0 126.169 0zM25.234 124.437c0-55 45.169-99.549 100.935-99.549a100.587 100.587 0 0161.823 21.03L46.556 185.411a97.482 97.482 0 01-21.322-60.974zm100.935 99.549a100.587 100.587 0 01-61.823-21.03L205.782 63.463a97.482 97.482 0 0121.318 60.974c0 55.001-45.164 99.549-100.931 99.549z"
        fill="#333"
      />
    </svg>
  );
}

CircleNotIcon.displayName = 'CircleNotIcon';
