import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ShapeRhombusIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.799 19.799"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M9.899 4.242L4.242 9.899l5.657 5.657 5.657-5.657zm-9.9 5.657l9.9 9.9 9.9-9.9-9.9-9.9z"
      />
    </svg>
  );
}

ShapeRhombusIcon.displayName = 'ShapeRhombusIcon';
