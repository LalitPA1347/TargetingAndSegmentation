import { ReactElement } from 'react';

interface CarouselProps {
  images: string[]; // Array of image paths
  interval?: number; // Optional interval for autoplay in milliseconds
  children?: ReactElement;
}

export default CarouselProps;
