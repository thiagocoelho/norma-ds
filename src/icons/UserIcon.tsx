import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function UserIcon({
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
      <path
        data-name="Caminho 1941"
        d="M128 128c40.4 0 73.143-28.654 73.143-64S168.396 0 128 0 54.857 28.654 54.857 64 87.604 128 128 128zm0-96c20.2 0 36.571 14.327 36.571 32S148.198 96 128 96 91.428 81.673 91.428 64 107.802 32 128 32z"
        fill="#333"
      />
      <path
        data-name="Caminho 1942"
        d="M128 128C57.308 128 0 178.144 0 240c0 8.836 8.187 16 18.286 16s18.286-7.163 18.286-16c0-44.183 40.934-80 91.429-80s91.429 35.817 91.429 80c0 8.837 8.187 16 18.286 16S256 248.837 256 240c0-61.856-57.308-112-128-112z"
        fill="#333"
      />
    </svg>
  );
}

UserIcon.displayName = 'UserIcon';
