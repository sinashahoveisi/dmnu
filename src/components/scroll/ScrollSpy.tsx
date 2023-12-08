'use client';

import {type FC, useState} from 'react';
import {useEffect} from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import {scrollTo} from 'utils/common';
import type {CategoryInterface} from 'types/resturant';

interface props {
  categories: Array<CategoryInterface>;
}

const ScrollSpy: FC<props> = ({categories}) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = document.body.scrollTop + 400;

      for (const category of categories) {
        const target = document.getElementById(category.id);

        if (target && activeSection !== category.id) {
          const {offsetTop, offsetHeight} = target;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(category.id);
            break;
          }
        }
      }
    };

    document.body.addEventListener('scroll', handleScroll);
    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, [categories]);

  return (
    <ul className="w-full flex flex-row flex-wrap items-center justify-center space-x-6 space-x-reverse">
      {categories?.map((category: CategoryInterface) => (
        <li
          key={category.id}
          className={clsx('p-2 rounded cursor-pointer text-zinc-300 hover:bg-gray-100 hover:text-primary-dark', {
            '!bg-primary !text-pen': activeSection === category.id
          })}>
          <a
            href={`#${category.id}`}
            className="text-xs font-semibold flex flex-col items-center justify-center space-y-2"
            onClick={(event) => {
              event.preventDefault();
              scrollTo('#categories', `#${category.id}`);
            }}>
            <Image
              src={category?.image}
              height={30}
              width={30}
              className="rounded bg-white shadow-lg p-1 object-contain border"
              alt={category?.name}
            />
            <span>{category?.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ScrollSpy;
