import type {FC} from 'react';
import Image from 'next/image';
import Button from 'components/button/Button';
import type {ProductInterface} from 'types/resturant';
import {useState} from 'react';

interface props {
  product: ProductInterface;
  className?: string;
}

const DEFAULT_IMAGE = '/images/product/default.png';

const ProductCard: FC<props> = ({product}) => {
  const [imageSrc, setImageSrc] = useState<string>(product.image || DEFAULT_IMAGE);
  return (
    <article className="w-full flex flex-row justify-between p-2 pt-4 cursor-pointer">
      <div className="flex flex-col space-y-2 p-1">
        <h3 className="text-base">{product?.name}</h3>
        <p className="text-xs text-gray-400">{product?.description}</p>
        <p className="text-md text-primary">
          {product?.price?.toLocaleString()}
          <span className="text-sm mr-2 text-zinc-600">تومان</span>
        </p>
      </div>
      <div className="flex flex-col justify-between">
        <div className="w-20 h-20">
          <Image
            src={imageSrc}
            height={80}
            width={80}
            className="rounded bg-white shadow-lg p-1 object-cover border h-full"
            onError={() => setImageSrc(DEFAULT_IMAGE)}
            alt={product?.name}
          />
        </div>
        {/*<Button width="w-full" title="افزودن" variant="primary-outline" />*/}
      </div>
    </article>
  );
};
export default ProductCard;
