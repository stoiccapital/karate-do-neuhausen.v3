// Card
// Single responsibility: Basic card container

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Card(props: CardProps) {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-6 ${props.className || ''}`}>
      {props.children}
    </div>
  );
}

