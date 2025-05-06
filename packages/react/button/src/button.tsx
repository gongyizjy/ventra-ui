import "./button.scss";
interface ButtonProps {
  children?: React.ReactNode;
}
export default function Button({ children }: ButtonProps) {
  return (
    <button className="btn">
      <span>测试{children}</span>
    </button>
  );
}
