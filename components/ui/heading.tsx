// Heading
// Single responsibility: Standardized heading primitive

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children?: React.ReactNode;
  className?: string;
}

export default function Heading(props: HeadingProps) {
  const level = props.level || 2;
  const baseClasses = 'font-bold';
  const sizeClasses = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg',
  };
  
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <Tag className={`${baseClasses} ${sizeClasses[level]} ${props.className || ''}`}>
      {props.children}
    </Tag>
  );
}

