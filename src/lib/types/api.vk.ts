export interface VKDataCity {
    id: number;
    title: string;
}

export interface VKDataCountry {
    id: number;
    title: string;
}

export interface VKDataInterface {
    id: number;
    bdate?: string;
    bdate_visibility?: number;
    city?: VKDataCity;
    country?: VKDataCountry;
    photo_200: string;
    photo_max_orig?: string;
    sex: number;
    photo_100: string;
    first_name: string;
    last_name: string;
    can_access_closed?: boolean;
    is_closed: boolean;
}
