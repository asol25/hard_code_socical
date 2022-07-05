import { options } from "../types/type-accessToken";
import axios from "axios";
import { suggested_profile } from "../types/type";
import { AxiosResponse } from "axios";
export const fetch_services_server = async (option: options): Promise<AxiosResponse<any, any> | undefined | suggested_profile> => {
    try {
        const options = {
            method: option.method,
            url: option.url,
            data: JSON.stringify(option.data),
            headers: { 'Content-Type': 'application/json' },
        }

        const response = await axios.request(options);
        console.log(option);
        return response.data;
    } catch (error) {
        console.error((error as Error).message);
    }
}