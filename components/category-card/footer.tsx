"use client";

interface CategoryCardFooterProps {
  name: string;
  onClick: () => void;
}

export const CategoryCardFooter = ({ name, onClick }: CategoryCardFooterProps) => {
  return (
    <div className="relative p-3">
      <p className="text-xl">{name}</p>
    </div>
  );
};
