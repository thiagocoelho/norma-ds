import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function TennisIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M17.071 17.071a10 10 0 10-14.142 0 10 10 0 0014.142 0zm.872-8.03a8 8 0 00-7-6.986l-.01.056a11.011 11.011 0 01-8.822 8.819l-.056.01a8 8 0 006.986 7l.013-.07a11.011 11.011 0 018.819-8.819zm-.071 2.389v-.33a9.013 9.013 0 00-6.772 6.772h.334a8 8 0 006.443-6.443zM2.111 8.888v-.222a8 8 0 016.554-6.555h.222a9.013 9.013 0 01-6.776 6.777z"
      />
    </svg>
  );
}

TennisIcon.displayName = 'TennisIcon';
