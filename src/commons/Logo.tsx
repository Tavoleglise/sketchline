import { FC, SVGProps } from "react";

interface MyComponentProps extends SVGProps<SVGSVGElement> {}

const Logo: FC<MyComponentProps> = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="#FFCC66" />
      <rect x="30" y="30" width="40" height="40" fill="#66CCCC" />
      <path
        d="M 20,50 Q 50,70 80,50"
        fill="none"
        stroke="#FF6699"
        strokeWidth="5"
      />
    </svg>
  );
};

export default Logo;
