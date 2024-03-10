import { SET_SIDEBAR } from "../../Action/Sidebar/SidebarAciton";

const initialState = {
    doc: '',
    timestamp: Date.now()
}

const SidebarReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_SIDEBAR:
            return ({ ...state, doc: action.value, timestamp: Date.now() })
        default:
            return state;
    }
}

export default SidebarReducer;