import { StaticImageData } from "next/image";

export interface IGallery {
  title: string;
  description: string;
  image: StaticImageData;
  index: number;
}
