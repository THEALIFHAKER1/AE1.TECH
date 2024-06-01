import { badgeVariants } from "@/components/ui/badge";

interface TagProps {
  tag: string;
}

export function Tag({ tag }: TagProps) {
  if (tag === "pin") {
    return null;
  }

  return (
    <div
      className={badgeVariants({
        variant: "secondary",
        className: "no-underline rounded-md text-nowrap",
      })}
    >
      {tag}
    </div>
  );
}
