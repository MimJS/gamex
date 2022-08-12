import './TimerBlock.scss'

export const TimerBlock = ({ time }) => {
  return (
    <div className="TimerBlock">
      <div className="TimerBlock__In">
        <span>{time}</span>
      </div>
    </div>
  );
};
