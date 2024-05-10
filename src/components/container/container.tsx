interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="p-[1rem]">{children}</div>;
};

export default Container;
