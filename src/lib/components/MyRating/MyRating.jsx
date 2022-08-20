import { FixedLayout } from "@vkontakte/vkui";
import { useSelector } from "react-redux";
import { RatingCell } from "../RatingCell/RatingCell";
import './MyRating.scss'

export const MyRating = () => {
  const { serverData, vkData } = useSelector((s) => {
    return { serverData: s.user.serverData, vkData: s.user.vkData };
  });

  return (
    <FixedLayout vertical="bottom" className="MyRating">
      <div className="MyRating__In">
        <RatingCell vkData={vkData} serverData={serverData} />
      </div>
    </FixedLayout>
  );
};
