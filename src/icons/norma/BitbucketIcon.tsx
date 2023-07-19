import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function BitbucketIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.492 14.73"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M.829 0a.8.8 0 00-.811.982l2.456 12.766a1.259 1.259 0 001.189.982h9.166a1.259 1.259 0 001.189-.982L16.474.982A.8.8 0 0015.663 0zm8.962 9.73l.91-4.73h-4.91l.91 4.73z"
      />
    </svg>
  );
}

BitbucketIcon.displayName = 'BitbucketIcon';
