// Section Container
// Single responsibility: Container for section content

interface SectionContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function SectionContainer(props: SectionContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${props.className || ''}`}>
      {props.children}
    </div>
  );
}

