import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function IcSentimentDissatisfiedIcon({
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
      <circle
        data-name="Elipse 31"
        cx={28}
        cy={28}
        r={28}
        transform="translate(152.355 72)"
        fill="#333"
      />
      <circle
        data-name="Elipse 32"
        cx={28}
        cy={28}
        r={28}
        transform="translate(47.645 72)"
        fill="#333"
      />
      <path
        data-name="Caminho 109"
        d="M127.872 0A128 128 0 10256 128 127.937 127.937 0 00127.872 0zM128 230.4A102.4 102.4 0 11230.4 128 102.372 102.372 0 01128 230.4zm0-76.8a70.338 70.338 0 00-65.536 44.8H83.84a50.888 50.888 0 0188.32 0h21.376A70.338 70.338 0 00128 153.6z"
        fill="#333"
      />
    </svg>
  );
}

IcSentimentDissatisfiedIcon.displayName = 'IcSentimentDissatisfiedIcon';
