import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function EnvelopIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={256}
      height={204.8}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M230.4 0H25.6A25.566 25.566 0 00.128 25.6L0 179.2a25.675 25.675 0 0025.6 25.6h204.8a25.675 25.675 0 0025.6-25.6V25.6A25.675 25.675 0 00230.4 0zm0 51.2l-102.4 64-102.4-64V25.6l102.4 64 102.4-64z"
        fill="#333"
      />
    </svg>
  );
}

EnvelopIcon.displayName = 'EnvelopIcon';
