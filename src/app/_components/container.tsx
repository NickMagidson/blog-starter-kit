type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto pt-16 px-5">{children}</div>;
};

export default Container;
