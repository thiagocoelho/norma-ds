import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function EditExposureIcon({
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
        d="M10 18a8 8 0 118-8 8 8 0 01-8 8zM0 10a10 10 0 1110 10A10 10 0 010 10zm9-5v2H7v2h2v2h2V9h2V7h-2V5zm-2 8v2h6v-2z"
      />
    </svg>
  );
}

EditExposureIcon.displayName = 'EditExposureIcon';
