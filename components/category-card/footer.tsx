"use client";

interface CategoryCardFooterProps {
  title: string;
  onClick: () => void;
}

export const CategoryCardFooter = ({ title, onClick }: CategoryCardFooterProps) => {
  return (
    <div className="relative p-3">
      <p className="text-xl">{title}</p>
    </div>
  );
};
