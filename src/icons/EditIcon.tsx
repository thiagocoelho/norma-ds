import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function EditIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={235.933}
      height={235.933}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        fill="none"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={20}
      >
        <path
          data-name="Caminho 1946"
          d="M106.584 32.765H31.463A21.463 21.463 0 0010 54.228V204.47a21.463 21.463 0 0021.463 21.463h150.242a21.463 21.463 0 0021.463-21.463v-75.121"
        />
        <path
          data-name="Caminho 1947"
          d="M187.07 16.668a22.765 22.765 0 0132.195 32.194l-101.95 101.95-42.926 10.732 10.732-42.926z"
        />
      </g>
    </svg>
  );
}

EditIcon.displayName = 'EditIcon';
