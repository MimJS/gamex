export interface VKDataCity {
    id: number;
    title: string;
}

export interface VKDataCountry {
    id: number;
    title: string;
}

export interface VKDataUser {
    first_name: string;
    last_name: string;
    photo_100: string;
}

export interface VKDataInterface extends VKDataUser {
    id: number;
    bdate?: string;
    bdate_visibility?: number;
    city?: VKDataCity;
    country?: VKDataCountry;
    photo_200: string;
    photo_max_orig?: string;
    sex: number;
    can_access_closed?: boolean;
    is_closed: boolean;
}
