
const initialNotification:string='';
const NotificationReducer=(state=initialNotification,action:any)=>{
    switch(action.type){
        case 'NO_PRODUCT':
            return 'noProduct'
        case 'ADD_NOTIFY':
            return 'add';
        case 'DELETE_NOTIFY':
            return 'delete';
        case 'UPDATE_NOTIFY':
            return 'update'; 
        case 'NO_NOTIFY':
            return 'no';
        default:
            return state; 
    }
}
export default NotificationReducer;
