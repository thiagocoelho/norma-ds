import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function PokemonIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M0 9a9 9 0 119 9 9 9 0 01-9-9zm2.071 1a7 7 0 0013.858 0h-4.1a3 3 0 01-5.659 0zm13.858-2A7 7 0 002.071 8h4.1a3 3 0 015.659 0zM9 10a1 1 0 10-1-1 1 1 0 001 1z"
      />
    </svg>
  );
}

PokemonIcon.displayName = 'PokemonIcon';
