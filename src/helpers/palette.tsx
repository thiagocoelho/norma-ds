// palette.tsx
import { useGetPrimaryColor } from './usePrimaryColor';

const Palette = () => {
  const primaryColor = useGetPrimaryColor();
  return {
    primary: primaryColor || '#FF7F11',
  };
};

export default Palette;
