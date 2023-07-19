import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function EditMarkupIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M12 24A12 12 0 100 12a12 12 0 0012 12zm6.579-4.469a10 10 0 10-13.246-.077L7 10.974h2.17L12 6.073l2.83 4.9H17zm-2.487 1.6l-.886-8.153H8.794l-.886 8.153a10.028 10.028 0 008.184 0z"
      />
    </svg>
  );
}

EditMarkupIcon.displayName = 'EditMarkupIcon';
