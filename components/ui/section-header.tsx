interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-14">
      <p className="font-mono text-[11px] font-semibold tracking-[3px] uppercase text-vine-500 mb-3.5">
        {eyebrow}
      </p>
      <h2 className="font-outfit text-3xl md:text-[44px] font-semibold tracking-tight leading-tight mb-3.5 text-txt">
        {title}
      </h2>
      {description && (
        <p className="text-txt-2 text-base max-w-[560px] mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
