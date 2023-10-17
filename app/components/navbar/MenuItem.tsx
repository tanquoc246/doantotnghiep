"use client";

interface MenuIemProps {
  onclick: () => void;
  label: string;
}
const MenuItem: React.FC<MenuIemProps> = ({ onclick, label }) => {
  return (
    <div
      onClick={onclick}
      className="
  px-4
  py-3
  hover:bg-neutral-100
  transition
  font-semibold
  "
    >
      {label}
    </div>
  );
};
export default MenuItem;
