import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ShapeZigzagIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.811 6.102"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M1.312 0L0 1.509l3.774 3.28L5.283 6.1 6.6 4.592l1.539-1.771L10.4 4.79l1.508 1.31 1.312-1.509 1.538-1.769 2.263 1.967L18.53 6.1l1.312-1.509 1.968-2.264-1.51-1.311-1.967 2.264L14.559 0l-1.312 1.509-1.536 1.771L7.937 0l-.883 1.016L5.086 3.28z"
      />
    </svg>
  );
}

ShapeZigzagIcon.displayName = 'ShapeZigzagIcon';
