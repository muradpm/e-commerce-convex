"use client";

interface CategoryCardFooterProps {
  title: string;
  onClick: () => void;
}

export const CategoryCardFooter = ({ title, onClick }: CategoryCardFooterProps) => {
  return (
    <div className="relative p-3">
      <p className="text-sm text-muted-foreground group-hover:text-foreground truncate max-w-[calc(100%-20px)]">
        {title}
      </p>
    </div>
  );
};
