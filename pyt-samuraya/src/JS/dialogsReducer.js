const ADD_SMS  = 'ADD-SMS'
const UPDATE_TEXT ='UPDATE-MESSEGE-TEXT'

let initialState = {
    dialogData: [
        { id: 1, name: 'Инга Мартиросова', photo: 'https://sun9-5.userapi.com/LVSWYz97MbuEN4jfwzwCgsdujzGFP39gUEUzZw/7kBW1fzBn7I.jpg' },
        { id: 2, name: 'И только дуресь в голове!!!', photo: 'https://sun9-8.userapi.com/c858420/v858420344/179726/n-qN-PuWKY8.jpg' },
        { id: 3, name: 'Евгений Крикунов', photo: 'https://sun1-22.userapi.com/c622731/v622731935/4131f/O3TbwWvQAjQ.jpg' },
        { id: 4, name: 'Влад Шишкин', photo: 'https://sun9-53.userapi.com/c824411/v824411498/192aee/m2MTtnfhWb0.jpg' },
        { id: 5, name: 'Мари Авакова', photo: 'https://sun1-16.userapi.com/c849428/v849428180/190a56/arlTpdzsB_0.jpg' },
        { id: 6, name: 'Екатерина Винтер', photo: 'https://sun9-47.userapi.com/Koztdjxu-_kw23szalRZF6iOKzNaPRec-ihXqw/OLBZEI4aoW4.jpg' },
        { id: 7, name: 'Мария Ноготок', photo: 'https://sun1-86.userapi.com/c857016/v857016326/e708a/rsLryZPtHlQ.jpg' },
        { id: 8, name: 'Алекс Аваков', photo: 'https://sun1-90.userapi.com/c850020/v850020450/19b79e/GVcJRA7SzcI.jpg' },
        { id: 9, name: 'Инга Мартиросова', photo: 'https://sun9-5.userapi.com/LVSWYz97MbuEN4jfwzwCgsdujzGFP39gUEUzZw/7kBW1fzBn7I.jpg' },
        { id: 10, name: 'И только дуресь в голове!!!', photo: 'https://sun9-8.userapi.com/c858420/v858420344/179726/n-qN-PuWKY8.jpg' },
        { id: 11, name: 'Евгений Крикунов', photo: 'https://sun1-22.userapi.com/c622731/v622731935/4131f/O3TbwWvQAjQ.jpg' },
        { id: 12, name: 'Влад Шишкин', photo: 'https://sun9-53.userapi.com/c824411/v824411498/192aee/m2MTtnfhWb0.jpg' },
        { id: 13, name: 'Мари Авакова', photo: 'https://sun1-16.userapi.com/c849428/v849428180/190a56/arlTpdzsB_0.jpg' },
        { id: 14, name: 'Екатерина Винтер', photo: 'https://sun9-47.userapi.com/Koztdjxu-_kw23szalRZF6iOKzNaPRec-ihXqw/OLBZEI4aoW4.jpg' },
        { id: 15, name: 'Мария Ноготок', photo: 'https://sun1-86.userapi.com/c857016/v857016326/e708a/rsLryZPtHlQ.jpg' },
        { id: 16, name: 'Алекс Аваков', photo: 'https://sun1-90.userapi.com/c850020/v850020450/19b79e/GVcJRA7SzcI.jpg' },
        { id: 17, name: 'Инга Мартиросова', photo: 'https://sun9-5.userapi.com/LVSWYz97MbuEN4jfwzwCgsdujzGFP39gUEUzZw/7kBW1fzBn7I.jpg' },
        { id: 18, name: 'И только дуресь в голове!!!', photo: 'https://sun9-8.userapi.com/c858420/v858420344/179726/n-qN-PuWKY8.jpg' },
        { id: 19, name: 'Евгений Крикунов', photo: 'https://sun1-22.userapi.com/c622731/v622731935/4131f/O3TbwWvQAjQ.jpg' },
        { id: 20, name: 'Влад Шишкин', photo: 'https://sun9-53.userapi.com/c824411/v824411498/192aee/m2MTtnfhWb0.jpg' },
        { id: 21, name: 'Мари Авакова', photo: 'https://sun1-16.userapi.com/c849428/v849428180/190a56/arlTpdzsB_0.jpg' },
        { id: 22, name: 'Екатерина Винтер', photo: 'https://sun9-47.userapi.com/Koztdjxu-_kw23szalRZF6iOKzNaPRec-ihXqw/OLBZEI4aoW4.jpg' },
        { id: 23, name: 'Мария Ноготок', photo: 'https://sun1-86.userapi.com/c857016/v857016326/e708a/rsLryZPtHlQ.jpg' },
        { id: 24, name: 'Алекс Аваков', photo: 'https://sun1-90.userapi.com/c850020/v850020450/19b79e/GVcJRA7SzcI.jpg' },
        { id: 25, name: 'Инга Мартиросова', photo: 'https://sun9-5.userapi.com/LVSWYz97MbuEN4jfwzwCgsdujzGFP39gUEUzZw/7kBW1fzBn7I.jpg' },
        { id: 26, name: 'И только дуресь в голове!!!', photo: 'https://sun9-8.userapi.com/c858420/v858420344/179726/n-qN-PuWKY8.jpg' },
        { id: 27, name: 'Евгений Крикунов', photo: 'https://sun1-22.userapi.com/c622731/v622731935/4131f/O3TbwWvQAjQ.jpg' },
        { id: 28, name: 'Влад Шишкин', photo: 'https://sun9-53.userapi.com/c824411/v824411498/192aee/m2MTtnfhWb0.jpg' },
        { id: 29, name: 'Мари Авакова', photo: 'https://sun1-16.userapi.com/c849428/v849428180/190a56/arlTpdzsB_0.jpg' },
        { id: 30, name: 'Екатерина Винтер', photo: 'https://sun9-47.userapi.com/Koztdjxu-_kw23szalRZF6iOKzNaPRec-ihXqw/OLBZEI4aoW4.jpg' },
        { id: 31, name: 'Мария Ноготок', photo: 'https://sun1-86.userapi.com/c857016/v857016326/e708a/rsLryZPtHlQ.jpg' },
        { id: 32, name: 'Алекс Аваков', photo: 'https://sun1-90.userapi.com/c850020/v850020450/19b79e/GVcJRA7SzcI.jpg' }
    ],

    smsData: [
        { id: Date.now(), sms: 'Привет. Как дела?' },
        { id: Date.now(), sms: 'Сообщения вроде работают' },
        { id: Date.now(), sms: 'Ну если это называется работают, до я баллерина :D' }
    ],

    newMessText: ''

};

const dialogsReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_SMS:      
            let newSMS = {
                id: Date.now(),
                sms: state.newMessText
            };
            return{
                ...state,
                smsData: [...state.smsData, newSMS],
                newMessText: ''
            }
        case UPDATE_TEXT:
            return{
                ...state,
                newMessText: action.newMessage
            }
        default:
            return state;
    }
}

export const addSMSac = () => ({type: ADD_SMS})
export const onChangeAC = (text) =>({
    type: UPDATE_TEXT,
    newMessage: text
})

export default dialogsReducer;


