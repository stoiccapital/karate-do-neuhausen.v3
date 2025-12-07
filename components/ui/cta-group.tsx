// CTA Group
// Single responsibility: Primary + secondary CTA layout

interface CtaGroupProps {
  children?: React.ReactNode;
  className?: string;
}

export default function CtaGroup(props: CtaGroupProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${props.className || ''}`}>
      {props.children}
    </div>
  );
}

