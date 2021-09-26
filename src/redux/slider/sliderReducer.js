import { sliderData } from '../../data/sliderData'

const INITIAL_STATE = {
    sliderData: sliderData
}

const sliderDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default sliderDataReducer