import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowLongRightRIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23.202 8.55"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M18.952 0l4.25 4.235-4.236 4.25-1.416-1.41 1.814-1.821-11.863.04L4.243 8.55.001 4.307 4.243.064l3.229 3.229 11.911-.041-1.842-1.835zM4.243 5.721l1.414-1.414-1.414-1.414-1.415 1.414z"
      />
    </svg>
  );
}

ArrowLongRightRIcon.displayName = 'ArrowLongRightRIcon';
