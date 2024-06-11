import './Divider.css';

export const Divider = ({ children }) => {
  return (
    <div className="divider">
      <div className="line-with-gradient"></div>
      <div className="content">{children}</div>
      <div className="line-with-gradient"></div>
    </div>
  )
}
