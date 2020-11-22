import { useWindowSize } from './useWindowSize';

export const useSlideNumber = () => {
  let slideNumber = 1;
  const size = useWindowSize();

  if (size?.width !== undefined) {
    if (size?.width > 800) {
      slideNumber = 2;
    }
    if (size?.width > 1000) {
      slideNumber = 3;
    }
  }

  return slideNumber;
};
