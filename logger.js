export default function logger(reducer) {
    return (preState, action, args) => {
        console.group(action)
        console.log('Pre State', preState)
        console.log('Action arguments', args)

        const nextState = reducer(preState, action, args)
        console.groupEnd()
        console.log('next state', nextState)
        return nextState
    }
}