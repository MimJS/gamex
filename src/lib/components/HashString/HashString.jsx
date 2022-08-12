import './HashString.scss'

export const HashString = ({ md5, check }) => {
  return (
    <div className="HashString">
      <div className="HashString__In">
        <div className="HashString__md5">Hash: {md5}</div>
        {check ? <div className="HashString__check">Check md5: {check}</div> : null}
      </div>
    </div>
  );
};
