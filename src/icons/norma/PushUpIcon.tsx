import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function PushUpIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 21.288"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M5 21.288h2V6.8l3.243 3.243 1.414-1.414L6 2.974.343 8.631l1.414 1.414L5 6.8zM12 2H0V0h12z"
      />
    </svg>
  );
}

PushUpIcon.displayName = 'PushUpIcon';
