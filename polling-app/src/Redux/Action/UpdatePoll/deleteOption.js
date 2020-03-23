import { DeleteOptionRequest, DeleteOptionError, DeleteOptionSuccess } from "../index";
import apiRequest from "../../../service/apicall";

export function deleteOptionForm(id, newOption) {
    return async function (dispatch, getState) {
        try {
            let error;
            dispatch(DeleteOptionRequest({ isLoading: true }));
            let data = await apiRequest(
                `https://secure-refuge-14993.herokuapp.com/add_new_option?id=${id}&option_text=${newOption}`,
                "post",
                {},
                {}
            ).then(res => { });
            if (!data.error) {
                dispatch(DeleteOptionSuccess({ response: data }));
            } else {
                dispatch(DeleteOptionError({ error: data }));
            }
        } catch (error) {
            dispatch(DeleteOptionError({ error: error }));
        }
    };
}
