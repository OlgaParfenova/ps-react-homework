import { HTMLAttributes } from 'react';

type Subtitle = {
  type: 'medium' | 'large';
};

export type SubtitleProps = HTMLAttributes<HTMLParagraphElement> & Subtitle;
