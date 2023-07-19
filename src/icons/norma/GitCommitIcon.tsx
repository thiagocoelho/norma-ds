import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function GitCommitIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 18"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M2 1a1 1 0 012 0v5.171a3 3 0 010 5.659V17a1 1 0 01-2 0v-5.171A3 3 0 012 6.17zm1 9a1 1 0 10-1-1 1 1 0 001 1z"
      />
    </svg>
  );
}

GitCommitIcon.displayName = 'GitCommitIcon';
