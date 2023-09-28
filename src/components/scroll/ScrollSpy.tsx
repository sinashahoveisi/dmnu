'use client';

import {type FC, useState} from 'react';
import {useEffect} from 'react';
import clsx from 'clsx';
import {scrollTo} from 'utils/common';

interface props {
  sections: Array<string>;
}

const ScrollSpy: FC<props> = ({sections}) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = document.body.scrollTop;

      for (const section of sections) {
        const target = document.getElementById(section);

        if (target && activeSection !== section) {
          const {offsetTop, offsetHeight} = target;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    document.body.addEventListener('scroll', handleScroll);
    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <ul className="w-full flex flex-row items-center space-x-6 space-x-reverse">
      {sections?.map((category) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li
          key={category}
          onClick={() => {
            scrollTo('#categories', `#${category}`);
          }}
          className={clsx('text-xs font-semibold p-2 rounded cursor-pointer', {
            'bg-black text-white': activeSection === category
          })}>
          <a
            href={`#${category}`}
            onClick={(event) => {
              event.preventDefault();
              scrollTo('#categories', `#${category}`);
            }}>
            {category}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ScrollSpy;
