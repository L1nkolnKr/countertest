const initialState = {
    value: 100
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => { //type Reducers
    switch (action.type) {
        case "INC-VALUE":
            return {
                ...state, value: state.value + 1
            }
        case "SET-VALUE-LOCAL-STORAGE":
            return {
                ...state, value: action.value
            }
        default:
            return state
    }

}


export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const setValueFromLocalStorageAC = (value: number) => ({type: 'SET-VALUE-LOCAL-STORAGE', value} as const)

export type IncValuesActionType = ReturnType<typeof incValueAC>
export type SetValueFromLocalStorageActionType = ReturnType<typeof setValueFromLocalStorageAC>

type ActionType = IncValuesActionType | SetValueFromLocalStorageActionType