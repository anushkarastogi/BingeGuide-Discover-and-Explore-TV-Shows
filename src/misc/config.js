const API_BASE_URL = 'https://www.tvmaze.com/api';

export async function apiGet(queryString) {
    const response = await fetch(`${API_BASE_URL}${queryString}`).then(r =>
        r.json()
    );

    return response;
}
