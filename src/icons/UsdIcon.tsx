import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function UsdIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={143.722}
      height={254}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        data-name="Icon metro-money"
        d="M77.399 111.473c-32.032-8.325-42.333-16.863-42.333-30.268 0-15.381 14.182-26.176 38.1-26.176 25.118 0 34.431 11.995 35.278 29.633h31.185c-.917-24.342-15.8-46.5-45.3-53.763V0h-42.33v30.48C24.624 36.473 2.612 54.116 2.612 81.421c0 32.6 27.023 48.825 66.322 58.279 35.348 8.467 42.333 20.814 42.333 34.078 0 9.666-6.844 25.188-38.1 25.188-29.069 0-40.57-13.053-42.051-29.633H0c1.764 30.9 24.835 48.19 52 54.045v30.621h42.333v-30.338c27.446-5.292 49.389-21.167 49.389-50.165 0-39.935-34.29-53.622-66.322-62.018z"
        fill="#333"
      />
    </svg>
  );
}

UsdIcon.displayName = 'UsdIcon';
