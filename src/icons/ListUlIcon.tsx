import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function ListUlIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={243.262}
      height={197.651}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        data-name="Icon awesome-list-ul"
        d="M22.806 0a22.806 22.806 0 1022.806 22.806A22.806 22.806 0 0022.806 0zm0 76.02a22.806 22.806 0 1022.806 22.805A22.806 22.806 0 0022.806 76.02zm0 76.02a22.806 22.806 0 1022.806 22.805 22.806 22.806 0 00-22.806-22.806zm212.855 7.6H83.621a7.6 7.6 0 00-7.6 7.6v15.2a7.6 7.6 0 007.6 7.6H235.66a7.6 7.6 0 007.6-7.6v-15.2a7.6 7.6 0 00-7.6-7.599zm0-152.039H83.621a7.6 7.6 0 00-7.6 7.6v15.2a7.6 7.6 0 007.6 7.6H235.66a7.6 7.6 0 007.6-7.6v-15.2a7.6 7.6 0 00-7.6-7.599zm0 76.019H83.621a7.6 7.6 0 00-7.6 7.6v15.2a7.6 7.6 0 007.6 7.6H235.66a7.6 7.6 0 007.6-7.6V91.225a7.6 7.6 0 00-7.6-7.6z"
        fill="#333"
      />
    </svg>
  );
}

ListUlIcon.displayName = 'ListUlIcon';
