'use client';

import {useState} from 'react';
import TextInput from 'components/input/Input';
import ProductCard from 'components/card/ProductCard';
import ScrollSpy from 'components/scroll/ScrollSpy';
import menu from 'config/menu';
import debounce from 'lodash/debounce';
import type {MenuInterface, CategoryInterface, ProductInterface} from 'types/resturant';

const categories: Array<CategoryInterface> = menu?.map((menuItem: MenuInterface) => menuItem.category);

function ProductSection() {
  const [search, setSearch] = useState<string | null>(null);
  const onSearch = debounce(setSearch, 200);

  return (
    <div>
      <div className="container sticky top-0 bg-body py-4">
        <div className="flex flex-col space-y-6">
          <ScrollSpy categories={categories} />
          <TextInput type="text" name="search" placeholder="جستجو" onChange={onSearch} />
        </div>
      </div>
      <section id="categories" className="container my-4">
        {menu?.map((menuItem: MenuInterface) => {
          const filterProducts = search
            ? menuItem?.products?.filter((product: ProductInterface) => product?.name?.includes(search))
            : menuItem?.products;
          return (
            <section key={menuItem.category?.id} id={menuItem.category?.id}>
              <h2 className="text-sm font-normal divide-text">{menuItem.category?.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:gap-4 my-4">
                {filterProducts?.map((product: ProductInterface, index: number) => (
                  <ProductCard product={product} key={index} />
                ))}
              </div>
            </section>
          );
        })}
      </section>
    </div>
  );
}

export default ProductSection;
