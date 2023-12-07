import {type FC, type HTMLAttributeAnchorTarget, type ReactNode, useMemo} from 'react';
import Link from 'next/link';
import cn from 'clsx';
import type {UrlObject} from 'url';
import type {ButtonVariant} from 'types/general';

interface Props {
  title: string;
  className?: string;
  backgroundColor?: string;
  variant?: ButtonVariant;
  width?: string;
  href: string | UrlObject;
  target?: HTMLAttributeAnchorTarget;
  icon?: ReactNode;
  disabled?: boolean;
  locale?: false | undefined;
  isLoading?: boolean;
}

const LinkButton: FC<Props> = ({
  title,
  icon,
  href,
  className,
  locale,
  target,
  backgroundColor,
  disabled,
  isLoading,
  variant = 'primary',
  width = 'w-fit'
}) => {
  const isOutline: boolean = variant?.endsWith('outline');
  const clx = useMemo(
    () =>
      cn(
        'min-h-[2.5rem] min-w-fit text-center text-sm font-medium text-body justify-center border-2 transition-all duration-300 my-2 flex shrink-0 items-center rounded-lg',
        className,
        {'bg-red-500 border-transparent': variant === 'danger' && !disabled},
        {'!text-red-500 border-transparent bg-transparent': variant === 'danger-ghost' && !disabled},
        {'!text-red-500 border-red-500': variant === 'danger-outline' && !disabled},
        {'!bg-primary !border-transparent': variant === 'primary' && !disabled},
        {'text-pen border-transparent': variant === 'ghost' && !disabled},
        {'!text-primary !border-primary': variant === 'primary-outline' && !disabled},
        {'bg-secondary border-transparent': variant === 'secondary' && !disabled},
        {'!text-secondary-dark border-secondary-dark': variant === 'secondary-outline' && !disabled},
        {'!text-zinc-500/80 border-gray-200': variant === 'muted-outline' && !disabled},
        {'cursor-not-allowed': isLoading || disabled},
        {'border-transparent bg-gray-200 ': disabled && !isOutline},
        {'text-zinc-500/80 border-gray-200': disabled && isOutline},
        {'opacity-80': isLoading},
        {[width]: width},
        {backgroundColor}
      ),
    [className, backgroundColor, variant, width, disabled, isLoading]
  );

  return (
    <Link prefetch={false} href={href} locale={locale} className={clx} target={target}>
      {icon && <span className="pl-2">{icon}</span>}
      {title}
    </Link>
  );
};

export default LinkButton;
