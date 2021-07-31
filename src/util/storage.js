const TODOS_STORGAE_KEY = 'TODOS'

export const storage = {
    get(){
        return JSON.parse(localStorage.getItem(TODOS_STORGAE_KEY)) || []
    },
    set(todos){
        localStorage.setItem(TODOS_STORGAE_KEY,JSON.stringify(todos))
    }
}