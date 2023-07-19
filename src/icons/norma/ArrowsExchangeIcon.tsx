import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowsExchangeIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.015 11.625"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="#fc7f11">
        <path
          data-name="Caminho 1446"
          d="M1 6.796a1 1 0 00-.531 1.848l2.688 2.688a1 1 0 101.414-1.414L3.45 8.796H11a1 1 0 000-2H1z"
        />
        <path
          data-name="Caminho 1447"
          d="M15.014 4.828a1 1 0 00.531-1.848L12.857.292a1 1 0 00-1.414 1.414l1.121 1.121h-7.55a1 1 0 000 2h10z"
        />
      </g>
    </svg>
  );
}

ArrowsExchangeIcon.displayName = 'ArrowsExchangeIcon';
