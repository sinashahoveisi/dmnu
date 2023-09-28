import {ScrollIntoViewOptionsProps} from 'types/general';

export const scrollTo = (containerSelector: string, targetSelector: string, options?: ScrollIntoViewOptionsProps) => {
  const targetElement: HTMLElement | null = document.querySelector<HTMLElement>(targetSelector);
  const containerElement: HTMLElement | null = document.querySelector<HTMLElement>(containerSelector);
  if (targetElement?.scrollIntoView)
    targetElement?.scrollIntoView({behavior: options?.behavior || 'smooth', block: options?.block || 'center'});
  else if (!!containerElement && !!targetElement)
    containerElement.scroll({
      top: targetElement?.offsetTop,
      behavior: options?.behavior || 'smooth'
    });
};
