import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function NotificationIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={249}
      height={249}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        data-name="Notification Icon"
        d="M93.379 217.878h62.242a31.121 31.121 0 11-62.242 0zm-77.818-15.56C6.233 202.318 0 196.085 0 186.757S6.233 171.2 15.561 171.2h7.787c10.883-10.9 23.334-26.458 23.334-46.7V77.818C46.682 34.245 80.928 0 124.5 0s77.8 34.245 77.8 77.818V124.5c0 20.239 12.453 35.8 23.349 46.7h7.787c9.328 0 15.561 6.219 15.561 15.561s-6.233 15.561-15.561 15.561z"
        fill="#333"
      />
    </svg>
  );
}

NotificationIcon.displayName = 'NotificationIcon';
