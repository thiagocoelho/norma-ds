import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function CornerDoubleDownLeftIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.385 18.724"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M8.492 5.056l4.84-5.057 5.057 4.841-1.388 1.445-2.462-2.357.162 6.034a4.8 4.8 0 01-4.669 4.927l-5.926.159L6.4 17.295 5 18.724l-5-4.9 4.9-5 1.429 1.4-2.379 2.428 6.018-.162a2.4 2.4 0 002.335-2.464l-.158-5.9-2.213 2.313z" />
    </svg>
  );
}

CornerDoubleDownLeftIcon.displayName = 'CornerDoubleDownLeftIcon';
