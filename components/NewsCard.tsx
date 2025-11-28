import Image from 'next/image';
import { NewsArticle } from './Hero';
import dayjs from 'dayjs';



const NewsCard = ({ urlToImage, title, publishedAt }:NewsArticle) => {
  return (
    <div className='flex items-center border rounded-md gap-4 p-2'>
      <div >
         <Image src={urlToImage ?? "/logo.avif"} alt={"image"} width={100} height={100}className='rounded-xs size-20' />
      </div>
      <div className='flex flex-col justify-between'>
         <h1 className='text-xl font-semibold'>{title}</h1>
         <span className='text-gray-500 text-sm'>{dayjs(publishedAt).format("ddd, DD MMM YYYY hh:mm A")}</span>
      </div>
    </div>
  );
}

export default NewsCard;
