import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function SettingsEthernetIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={254.333}
      height={148.323}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        data-name="Icon material-settings-ethernet"
        d="M79.053 14.559L61.536 0 0 74.162l61.536 74.162 17.517-14.559L29.57 74.162l49.479-59.6zm-8.759 70.977h22.749V62.787H70.294zm113.745-22.749H161.29v22.749h22.749zm-68.247 22.749h22.749V62.787h-22.749zM192.797 0l-17.516 14.559 49.479 59.6-49.479 59.6 17.517 14.559 61.536-74.162L192.797 0z"
        fill="#333"
      />
    </svg>
  );
}

SettingsEthernetIcon.displayName = 'SettingsEthernetIcon';
