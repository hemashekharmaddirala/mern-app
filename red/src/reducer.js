const count=89
export default function reducer(state=count,action){
const{type,payload}=action
switch(type){
    case "INCRIMENT":
    return count+payload;
    case "DECREMENT":
        return count-payload;
        default:
            return count;
}
}