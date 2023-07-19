import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function StarOutlineIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={253}
      height={253}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        data-name="Icon ionic-ios-star-outline"
        d="M243.4 87.577h-83.073l-25.243-81.13a8.938 8.938 0 00-17.168 0l-25.243 81.13H9.036C4.066 87.577 0 91.956 0 97.308a7.678 7.678 0 00.169 1.642c.113 2.129 1.017 4.5 3.784 6.872l68.276 51.816-26.2 82.043a10.209 10.209 0 003.103 10.944c1.638 1.277 3.162 2.372 5.083 2.372a10.585 10.585 0 005.647-2.189l66.638-51.147 66.638 51.147a10.12 10.12 0 005.647 2.189c1.92 0 3.445-1.034 5.026-2.372a10.081 10.081 0 003.106-10.947l-26.2-82.043 67.711-52.3 1.638-1.52c1.468-1.7 2.937-4.014 2.937-6.507a9.9 9.9 0 00-9.603-9.731zm-71.834 56.256a17.835 17.835 0 00-5.76 19.34l17 53.337a2.318 2.318 0 01-3.445 2.8l-43.711-33.574a15.02 15.02 0 00-9.205-3.162 14.746 14.746 0 00-9.149 3.162l-43.71 33.51c-1.807 1.4-4.179-.547-3.445-2.8l17-53.337a17.891 17.891 0 00-5.817-19.462l-45.746-34.722c-1.807-1.338-.9-4.44 1.3-4.44h55.738c6.777 0 12.819-4.683 14.965-11.616l16.717-53.644a2.223 2.223 0 014.292 0l16.716 53.641c2.146 6.933 8.189 11.616 14.965 11.616h54.948a2.438 2.438 0 011.3 4.379z"
        fill="#333"
      />
    </svg>
  );
}

StarOutlineIcon.displayName = 'StarOutlineIcon';
