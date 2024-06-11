"use client";

interface CategoryCardFooterProps {
  name: string;
  onClick: () => void;
}

export const CategoryCardFooter = ({ name, onClick }: CategoryCardFooterProps) => {
  return (
    <div className="absolute bottom-1 left-0 right-0 p-3 text-center">
      <p className="text-lg text-white bg-muted-foreground/70 rounded-lg">{name}</p>
    </div>
  );
};
