import "./ProfileActionButton.scss";

export const ProfileActionButton = ({ icon, text, onClick }) => {
  return (
    <div className="ProfileActionButton" onClick={onClick}>
      <div className="ProfileActionButton__In">
        {icon ? <div className="ProfileActionButton__Icon">{icon}</div> : null}
        {text ? (
          <span className="ProfileActionButton__Text">{text}</span>
        ) : null}
      </div>
    </div>
  );
};
