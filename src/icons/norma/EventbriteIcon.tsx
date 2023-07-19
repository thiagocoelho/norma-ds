import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function EventbriteIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.729 20.005"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M12.538 15.44a6 6 0 01-6.819-1.238l14.01-6.533a10.005 10.005 0 10-.183 5.315h-4.339a5.972 5.972 0 01-2.669 2.456zM7.465 4.564a6 6 0 00-3.438 6.016l10.259-4.778a6 6 0 00-6.821-1.238z"
      />
    </svg>
  );
}

EventbriteIcon.displayName = 'EventbriteIcon';
