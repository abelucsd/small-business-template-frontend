import type { ReactNode } from "react"

interface InformationalLayout {
  title: string;
  children?: ReactNode;
};

const InformationalLayout = ({title, children}: InformationalLayout) => {
  return (
    <div className={`container mx-auto`}>
      <div className=" ml-4 mr-4 md:ml-0 md:mr-0">
        <h1>{title}</h1>
        <div className="flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InformationalLayout;