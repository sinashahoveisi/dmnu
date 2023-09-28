export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'primary-outline'
  | 'secondary-outline'
  | 'danger'
  | 'danger-outline'
  | 'danger-ghost'
  | 'muted-outline'
  | 'ghost';

export interface ScrollIntoViewOptionsProps {
  behavior?: 'auto' | 'smooth';
  block?: 'center' | 'end' | 'nearest' | 'start';
}
