import { portfolioDAta } from "../../data/Portfolio"

const INITIAL_STATE = {
    portfolioData: portfolioDAta
}

const portfolioReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default portfolioReducer