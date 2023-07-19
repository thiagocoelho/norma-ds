import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function CircleTimerIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={245.605}
      height={245.667}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        data-name="Caminho 1968"
        d="M122.833 245.662A122.836 122.836 0 0137.587 34.393a9.861 9.861 0 0113.7 14.187 103.086 103.086 0 1081.375-28.374v38.446a9.888 9.888 0 11-19.776 0V9.888A9.882 9.882 0 01122.774 0a122.834 122.834 0 01.061 245.667z"
        fill="#333"
      />
      <path
        data-name="Caminho 1969"
        d="M92.041 83.332l61.937 44.507a18.742 18.742 0 01-21.787 30.5 18.1 18.1 0 01-4.357-4.357L83.327 92.047a6.245 6.245 0 018.715-8.715z"
        fill="#333"
      />
    </svg>
  );
}

CircleTimerIcon.displayName = 'CircleTimerIcon';
