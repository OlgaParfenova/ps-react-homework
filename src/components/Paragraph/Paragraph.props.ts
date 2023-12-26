import { HTMLAttributes } from 'react';

type Paragraph = {
  type: 'medium' | 'large';
};

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & Paragraph;
