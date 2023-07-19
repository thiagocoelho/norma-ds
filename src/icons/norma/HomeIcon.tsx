import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function HomeIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 22.171"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M18 7.858L11.021.879a3 3 0 00-4.243 0L0 7.657v14.515h7v-6a2 2 0 114 0v6h7zM8.192 2.293L2 8.486v11.686h3v-4a4 4 0 118 0v4h3V8.686L9.607 2.293a1 1 0 00-1.415 0z"
      />
    </svg>
  );
}

HomeIcon.displayName = 'HomeIcon';
