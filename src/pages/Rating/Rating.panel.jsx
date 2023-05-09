import {
    List,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    PanelHeaderContent,
    Placeholder,
    Spinner,
    Button,
} from '@vkontakte/vkui';
import { useEffect, useState } from 'react';
import { AboutRating, MyRating, PaddingWrapper, RatingCell } from '../../lib/components';
import { getRating } from '../../lib/modules/serverRequests';
import { getUsersData } from '../../lib/modules/vkApi';

export const RatingPanel = ({ id }) => {
    const [ratingData, setRatingData] = useState({
        serverData: null,
        vkData: null,
    });

    const [isError, setIsError] = useState(false);

    const viewRatingDataError = () => {
        setTimeout(async () => {
            setIsError(true);
        }, 500);
    };

    const getTopData = async () => {
        setIsError(false);
        const data = await getRating();
        if (data) {
            try {
                let ids = [];
                data.forEach((v) => {
                    ids.push(v.id);
                });
                const vkUsersData = await getUsersData(ids);
                if (vkUsersData) {
                    setRatingData({ serverData: data, vkData: vkUsersData });
                    return;
                } else {
                    setRatingData({ serverData: data, vkData: [] });
                    return;
                }
            } catch (e) {
                viewRatingDataError();
            }
        }
        if (!data || data instanceof Error) {
            viewRatingDataError();
        }
    };

    useEffect(() => {
        getTopData();
    }, []);

    useEffect(() => {
        console.log(ratingData);
    }, [ratingData]);

    const onClose = () => {};

    return (
        <Panel id={id}>
            <PanelHeader separator={false} before={<PanelHeaderBack onClick={onClose} />}>
                <PanelHeaderContent status>Топ дня</PanelHeaderContent>
            </PanelHeader>
            <PaddingWrapper style={{ paddingBottom: 82 }}>
                <AboutRating />
                {isError ? (
                    <Placeholder
                        action={
                            <Button mode={'tertiary'} onClick={getTopData}>
                                Перезагрузить
                            </Button>
                        }
                    >
                        Произошла ошибка
                    </Placeholder>
                ) : ratingData.serverData && ratingData.vkData ? (
                    <List>
                        {ratingData.serverData.map((v, i) => {
                            console.log(ratingData);
                            const userVkData = ratingData.vkData ? ratingData.vkData.find((f) => f.id == v.id) : null;
                            return <RatingCell vkData={userVkData} serverData={v} position={i + 1} key={i} />;
                        })}
                    </List>
                ) : (
                    <Spinner size={'regular'} style={{ marginTop: 30 }} />
                )}
            </PaddingWrapper>
            <MyRating />
        </Panel>
    );
};
