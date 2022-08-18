import { Placeholder, Spinner } from "@vkontakte/vkui";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LoadingTexts } from "../../configs/config.text";
import "./Loading.scss";
import bridge from "@vkontakte/vk-bridge";
import { USER_SET_VK_DATA } from "../../configs/config.redux";
import { getUserData } from "../../modules/serverRequests";

export const Loading = () => {
  const [textIndex, setTextIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextText = Number(textIndex + 1) < LoadingTexts.length;
      setTextIndex(nextText ? Number(textIndex + 1) : 0);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [textIndex]);

  useEffect(() => {
    const getVkData = async () => {
      const vkData = await bridge.send("VKWebAppGetUserInfo");
      if (vkData) {
        dispatch({
          type: USER_SET_VK_DATA,
          payload: vkData,
        });
        await getUserData(vkData.id)
      } else {
        // error protocol
      }
    };
    getVkData();
  }, []);

  return (
    <Placeholder
      icon={<Spinner className="Loading--spinner" size={"regular"} />}
      children={LoadingTexts[textIndex]}
      stretched
      className="Loading"
    />
  );
};
