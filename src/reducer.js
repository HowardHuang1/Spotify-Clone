export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQBbrccGi8RWvhCavKk-u3yMy2qwbMwtkEmAXBC6eLpLd7ZQF8xOBTB51be73tEzq5Zl1QlqWKgnR-JgwUDGMqof9odr91Hicif004LfnmpIrhZC1oOTgpkjTBXlmI-fEeIm5Le1qYfVK-HA0dVIJFWTiwsCFub-2xCXkPrmIcsS_V9obl3BrKJ5Im3VbCFeHFqy8rZUoFmcSRlpYZ6s4A",
};

const reducer = (state, action) => {
    console.log(action);

    // Action has 2 things -> type, [payload]
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
}

export default reducer;