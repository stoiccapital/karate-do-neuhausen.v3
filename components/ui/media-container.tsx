// Media Container
// Single responsibility: Wrapper for images/visuals

interface MediaContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function MediaContainer(props: MediaContainerProps) {
  return (
    <div className={`relative ${props.className || ''}`}>
      {props.children}
    </div>
  );
}

