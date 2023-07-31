import { defaultIcons } from './default';
import { Colors } from "../../../helpers/colors"
import { Sizes } from "../../../helpers/sizes"

export interface IconsProps {
  icon: IconType;
  scale?: Sizes;
  color?: Colors;
  width?: number;
  height?: number;
  fill?: string;
}

export type IconType = keyof typeof defaultIcons;


