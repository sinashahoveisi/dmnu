import type {FC} from 'react';
import Image from 'next/image';
import Button from 'components/button/Button';

interface props {
  className?: string;
}

const ProductCard: FC<props> = ({className}) => {
  return (
    <article className="w-full flex flex-row justify-between p-2 pt-4 cursor-pointer">
      <div className="flex flex-col space-y-2 p-1">
        <h3 className="text-base">آبمیوه و بستنی توچال (شریعتی)</h3>
        <p className="text-xs text-gray-400">تهیه شده از ماست تازه ترش و خوشمزه دارای سیب سلامت</p>
        <p className="text-md text-zinc-600">
          250,000
          <span className="text-sm mr-2 text-zinc-400">تومان</span>
        </p>
      </div>
      <div className="flex flex-col justify-between">
        <Image
          src="/images/tochal.png"
          height={80}
          width={80}
          className="rounded bg-white shadow-lg p-1 object-contain border"
          alt="Picture of the tochal"
        />
        <Button width="w-full" title="افزودن" variant="primary-outline" />
      </div>
    </article>
  );
};
export default ProductCard;
