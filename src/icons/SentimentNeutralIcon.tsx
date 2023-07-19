import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function SentimentNeutralIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={256}
      height={256}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="#333">
        <path data-name="Caminho 107" d="M71.74 164.25h112.52V190H71.74z" />
        <circle
          data-name="Elipse 29"
          cx={28}
          cy={28}
          r={28}
          transform="translate(154.956 72.478)"
        />
        <circle
          data-name="Elipse 30"
          cx={28}
          cy={28}
          r={28}
          transform="translate(50.565 72.478)"
        />
        <path
          data-name="Caminho 108"
          d="M127.872 0A128 128 0 10256 128 127.937 127.937 0 00127.872 0zM128 230.4A102.4 102.4 0 11230.4 128 102.372 102.372 0 01128 230.4z"
        />
      </g>
    </svg>
  );
}

SentimentNeutralIcon.displayName = 'SentimentNeutralIcon';
