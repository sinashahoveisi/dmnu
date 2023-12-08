'use client';

import React, {
  ReactNode,
  useCallback,
  ForwardRefRenderFunction,
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef
} from 'react';
import Spinner from 'components/loading/Spinner';
import cn from 'clsx';

interface refProps {
  focus: () => void;
}

interface Props {
  name: string;
  label?: string;
  defaultValue?: string | number | string[];
  type?: 'text' | 'search' | 'number' | 'password' | 'email' | 'tel';
  className?: string;
  value?: string;
  containerClassName?: string;
  loading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  autocomplete?: 'on' | 'off';
  maxLength?: number;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  onChange(text: string): void;
}

const TextInput: ForwardRefRenderFunction<refProps, Props> = (
  {
    name,
    label,
    type,
    placeholder,
    className = '',
    containerClassName = '',
    value,
    disabled,
    loading,
    defaultValue,
    maxLength,
    autocomplete,
    leftElement,
    rightElement,
    onChange
  }: Props,
  forwardedRef: ForwardedRef<refProps>
) => {
  const ref = useRef<any>(null);

  useImperativeHandle(forwardedRef, () => ({
    focus() {
      ref.current.focus();
    }
  }));

  const onChangeText = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }, []);

  return (
    <div className={containerClassName}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium md:text-base">
          {label}
        </label>
      )}
      <div className="relative mt-1">
        {(leftElement || loading) && (
          <span className="absolute inset-y-0 left-4 inline-flex items-center">
            {loading ? <Spinner /> : leftElement}
          </span>
        )}
        <input
          ref={ref}
          type={type}
          id={name}
          value={value}
          defaultValue={defaultValue}
          className={cn(
            'text-sm w-full rounded-lg border p-3 py-2 text-right bg-gray-700 focus:outline-none focus:border-primary',
            {'pl-12': leftElement},
            {'pr-12': rightElement},
            {'cursor-not-allowed bg-gray-200': disabled},
            className
          )}
          disabled={disabled}
          placeholder={placeholder}
          maxLength={maxLength}
          autoComplete={autocomplete}
          onChange={onChangeText}
        />
        {rightElement && <span className="absolute inset-y-0 right-4 inline-flex items-center">{rightElement}</span>}
      </div>
    </div>
  );
};

export default forwardRef(TextInput);
