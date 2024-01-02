import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

export type Image = {
  url: string
}

export type ImageContextType = {
  images: Image[],
  setImages: Dispatch<SetStateAction<Image[]>>
}

export const ImageContext = createContext<ImageContextType>({
  images: [],
  setImages: () => { }
});

type ImageProviderProps = {
  children: React.ReactNode
}

export const ImageProvider = ({ children }: ImageProviderProps) => {
  const [images, setImages] = useState<Image[]>([]);

  return (
    <ImageContext.Provider value={{ images, setImages }}>
      {children}
    </ImageContext.Provider>
  );
}

export const useImage = () => useContext(ImageContext);