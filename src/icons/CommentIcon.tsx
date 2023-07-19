import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function CommentIcon({
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
        d="M230.4 0H25.6A25.566 25.566 0 00.128 25.6L0 256l51.2-51.2h179.2a25.675 25.675 0 0025.6-25.6V25.6A25.675 25.675 0 00230.4 0zM51.2 89.6h153.6v25.6H51.2zm102.4 64H51.2V128h102.4zm51.2-76.8H51.2V51.2h153.6z"
        fill="#333"
      />
    </svg>
  );
}

CommentIcon.displayName = 'CommentIcon';
