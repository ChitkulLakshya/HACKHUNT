import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterPillsProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  multiple?: boolean;
}

const FilterPills = ({
  options,
  selected,
  onChange,
  multiple = true,
}: FilterPillsProps) => {
  const handleClick = (option: string) => {
    if (multiple) {
      if (selected.includes(option)) {
        onChange(selected.filter((s) => s !== option));
      } else {
        onChange([...selected, option]);
      }
    } else {
      onChange(selected.includes(option) ? [] : [option]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <Button
          key={option}
          variant={selected.includes(option) ? "pill-active" : "pill"}
          size="pill"
          onClick={() => handleClick(option)}
          className={cn(
            "transition-all duration-300",
            selected.includes(option) && "shadow-sm"
          )}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default FilterPills;
