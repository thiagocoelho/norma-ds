import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function ListCheckIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={249.5}
      height={166.333}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        data-name="Icon material-playlist-add-check"
        d="M142.571 47.524H0v23.762h142.571zm0-47.524H0v23.762h142.571zM0 118.81h95.048V95.048H0zm231.679-53.465L249.5 83.167l-83.048 83.167-53.583-53.464 17.821-17.821 35.762 35.643z"
        fill="#333"
      />
    </svg>
  );
}

ListCheckIcon.displayName = 'ListCheckIcon';
