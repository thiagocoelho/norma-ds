import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function EuroIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.935 14"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M14.521 10.535a5 5 0 01-7.9-1.1h2.381l.7-1.875H6.017a5.071 5.071 0 010-1.125h4.287l.7-1.875H6.619a5 5 0 017.9-1.1l1.417-1.41A7 7 0 004.422 4.563H2l-.7 1.875H4q-.022.278-.022.563T4 7.564H.696l-.7 1.875h4.426a7 7 0 0011.514 2.511z" />
    </svg>
  );
}

EuroIcon.displayName = 'EuroIcon';
