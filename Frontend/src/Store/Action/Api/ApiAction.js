export const SET_API_JSON = 'SET_API_JSON'
export const SET_API_DATA = 'SET_API_DATA'


export const setApiData = (data) => ({ type: SET_API_DATA, value: data });
export const setApiJson = (data) => ({ type: SET_API_JSON, value: data });

export const HitApi = (json, api) => {
    const MyPromiss = new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-auth': 'token' },
            body: JSON.stringify(json)
        };
        fetch(api, requestOptions)
            .then(res => res.json())
            .then(
                (result) => {

                    if (result) {
                        resolve(result)
                    }
                },
                (error) => {
                    resolve(error)
                }
            )
    })

    return MyPromiss;
}

export const RemoveApi = (api, ele) => {
    const MyPromiss = new Promise((resolve, reject) => {
        if(api && ele){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'x-auth': 'token' },
                body: JSON.stringify({_id:ele?._id})
            };
            fetch(api, requestOptions)
                .then(res => res.json())
                .then(
                    (result) => {
                        if (result) {
                            resolve(result)
                        }
                    },
                    (error) => {
                        resolve(error)
                    }
                )
        }
    })

    return MyPromiss;
}