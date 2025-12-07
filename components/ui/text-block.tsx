// Text Block
// Single responsibility: Paragraph / small text blocks

interface TextBlockProps {
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg';
}

const sizeClasses = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
};

export default function TextBlock(props: TextBlockProps) {
  const size = props.size || 'base';
  return (
    <p className={`${sizeClasses[size]} ${props.className || ''}`}>
      {props.children}
    </p>
  );
}

