import { aboutData } from "../../data/aboutData";

const INITIAL_STATE = {
    aboutData: aboutData
}

const aboutReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default aboutReducer