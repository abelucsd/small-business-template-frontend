import type { ReactNode } from "react"

interface InformationalLayout {
  title: string;
  children?: ReactNode;
};

const InformationalLayout = ({title, children}: InformationalLayout) => {
  return (
    <div className={`container mx-auto`}>
      <h1>{title}</h1>
      <div>
        {children}
      </div>
    </div>
  );
};

export default InformationalLayout;