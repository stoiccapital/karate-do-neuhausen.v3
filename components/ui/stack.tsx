// Stack
// Single responsibility: Stack layout component

interface StackProps {
  children?: React.ReactNode;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

const gapClasses = {
  xs: 'gap-2',
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
  '2xl': 'gap-16',
};

export default function Stack(props: StackProps) {
  const gapClass = props.gap ? gapClasses[props.gap] : gapClasses.md;
  return (
    <div className={`flex flex-col ${gapClass} ${props.className || ''}`}>
      {props.children}
    </div>
  );
}

