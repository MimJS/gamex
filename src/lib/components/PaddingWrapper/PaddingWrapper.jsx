import "./PaddingWrapper.scss";

export const PaddingWrapper = ({ children, style }) => {
  return (
    <div className="PaddingWrapper" style={style}>
      {children}
    </div>
  );
};
