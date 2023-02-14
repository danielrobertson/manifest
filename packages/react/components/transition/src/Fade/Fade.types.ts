import type { TransitionProps } from '../Transition.types';

export interface FadeProps extends Omit<TransitionProps, 'children'> {
  /**
   * A single child element.
   */
  children: React.ReactElement;
  /**
   * The animation duration in miliseconds.
   *
   * @default 250
   */
  duration?: number;
}