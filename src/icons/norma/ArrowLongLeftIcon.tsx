import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowLongLeftIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.946 8.485"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M0 4.236l4.235 4.25 1.417-1.412-1.821-1.831h18.115v-2H3.826l1.836-1.826L4.25 0z" />
    </svg>
  );
}

ArrowLongLeftIcon.displayName = 'ArrowLongLeftIcon';
