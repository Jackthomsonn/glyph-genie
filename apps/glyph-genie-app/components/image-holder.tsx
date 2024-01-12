import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Image as IM } from '@/context/image';

export const ImageHolder = ({ image, index }: { image: IM, index: number }) => {
  return (
    <>
      <div className="group hidden relative md:flex">
        <Image width={500} height={500} quality={100} alt="Generated Icon Image" key={index} src={image.url} className="rounded-xl shadow-md w-full" />
        <div className="hidden group-hover:flex absolute inset-0 items-center justify-center bg-black bg-opacity-50 rounded-xl">
          <Button className="bg-violet-500 hover:bg-violet-600 text-white font-bold rounded-lg text-md" onClick={() => {
            const downloadLink = document.createElement('a');
            downloadLink.href = image.url;
            downloadLink.download = image.url;

            document.body.appendChild(downloadLink);
            downloadLink.click();

            document.body.removeChild(downloadLink);
          }}>Download</Button>
        </div>
      </div>
      <div className='flex flex-col md:hidden'>
        <Image width={500} height={500} quality={100} alt="Generated Icon Image" key={index} src={image.url} className="rounded-xl shadow-md w-full" />
        <Button className="mt-2 bg-violet-500 hover:bg-violet-600 text-white font-bold rounded-lg text-md">Download</Button>
      </div>
    </>
  )
}