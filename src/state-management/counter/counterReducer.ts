interface Action {
    type: 'increment' | 'reset';

} 



const counterReducer = (state: number, action: Action): number => {

    if (action.type === 'increment') 
        return state + 1;
    if (action.type === 'reset') 
        return 0;
       return state
}   

export default counterReducer;