"use client";


interface Props {
    label: string; // "Today", "Yesterday", "Earlier"
  }
  
  export const DailyDivider = ({ label }: Props) => {
    return (
      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px bg-[#C69DD220]" />
        <span className="text-xs uppercase tracking-wide text-gray-500">
          {label}
        </span>
        <div className="flex-1 h-px bg-[#C69DD220]" />
      </div>
    );
  };
  