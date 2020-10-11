/*import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        DialogPage: {
            dialogData: [ 
                { id: 1, name: 'Инга Мартиросова', photo: 'https://sun9-5.userapi.com/LVSWYz97MbuEN4jfwzwCgsdujzGFP39gUEUzZw/7kBW1fzBn7I.jpg' },
                { id: 2, name: 'И только дуресь в голове!!!', photo: 'https://sun9-8.userapi.com/c858420/v858420344/179726/n-qN-PuWKY8.jpg' },
                { id: 3, name: 'Евгений Крикунов', photo: 'https://sun1-22.userapi.com/c622731/v622731935/4131f/O3TbwWvQAjQ.jpg' },
                { id: 4, name: 'Влад Шишкин', photo: 'https://sun9-53.userapi.com/c824411/v824411498/192aee/m2MTtnfhWb0.jpg' },
                { id: 5, name: 'Мари Авакова', photo: 'https://sun1-16.userapi.com/c849428/v849428180/190a56/arlTpdzsB_0.jpg' },
                { id: 6, name: 'Екатерина Винтер', photo: 'https://sun9-47.userapi.com/Koztdjxu-_kw23szalRZF6iOKzNaPRec-ihXqw/OLBZEI4aoW4.jpg' },
                { id: 7, name: 'Мария Ноготок', photo: 'https://sun1-86.userapi.com/c857016/v857016326/e708a/rsLryZPtHlQ.jpg' },
                { id: 8, name: 'Алекс Аваков', photo: 'https://sun1-90.userapi.com/c850020/v850020450/19b79e/GVcJRA7SzcI.jpg' },
                { id: 1, name: 'Инга Мартиросова', photo: 'https://sun9-5.userapi.com/LVSWYz97MbuEN4jfwzwCgsdujzGFP39gUEUzZw/7kBW1fzBn7I.jpg' },
                { id: 2, name: 'И только дуресь в голове!!!', photo: 'https://sun9-8.userapi.com/c858420/v858420344/179726/n-qN-PuWKY8.jpg' },
                { id: 3, name: 'Евгений Крикунов', photo: 'https://sun1-22.userapi.com/c622731/v622731935/4131f/O3TbwWvQAjQ.jpg' },
                { id: 4, name: 'Влад Шишкин', photo: 'https://sun9-53.userapi.com/c824411/v824411498/192aee/m2MTtnfhWb0.jpg' },
                { id: 5, name: 'Мари Авакова', photo: 'https://sun1-16.userapi.com/c849428/v849428180/190a56/arlTpdzsB_0.jpg' },
                { id: 6, name: 'Екатерина Винтер', photo: 'https://sun9-47.userapi.com/Koztdjxu-_kw23szalRZF6iOKzNaPRec-ihXqw/OLBZEI4aoW4.jpg' },
                { id: 7, name: 'Мария Ноготок', photo: 'https://sun1-86.userapi.com/c857016/v857016326/e708a/rsLryZPtHlQ.jpg' },
                { id: 8, name: 'Алекс Аваков', photo: 'https://sun1-90.userapi.com/c850020/v850020450/19b79e/GVcJRA7SzcI.jpg' },
                { id: 1, name: 'Инга Мартиросова', photo: 'https://sun9-5.userapi.com/LVSWYz97MbuEN4jfwzwCgsdujzGFP39gUEUzZw/7kBW1fzBn7I.jpg' },
                { id: 2, name: 'И только дуресь в голове!!!', photo: 'https://sun9-8.userapi.com/c858420/v858420344/179726/n-qN-PuWKY8.jpg' },
                { id: 3, name: 'Евгений Крикунов', photo: 'https://sun1-22.userapi.com/c622731/v622731935/4131f/O3TbwWvQAjQ.jpg' },
                { id: 4, name: 'Влад Шишкин', photo: 'https://sun9-53.userapi.com/c824411/v824411498/192aee/m2MTtnfhWb0.jpg' },
                { id: 5, name: 'Мари Авакова', photo: 'https://sun1-16.userapi.com/c849428/v849428180/190a56/arlTpdzsB_0.jpg' },
                { id: 6, name: 'Екатерина Винтер', photo: 'https://sun9-47.userapi.com/Koztdjxu-_kw23szalRZF6iOKzNaPRec-ihXqw/OLBZEI4aoW4.jpg' },
                { id: 7, name: 'Мария Ноготок', photo: 'https://sun1-86.userapi.com/c857016/v857016326/e708a/rsLryZPtHlQ.jpg' },
                { id: 8, name: 'Алекс Аваков', photo: 'https://sun1-90.userapi.com/c850020/v850020450/19b79e/GVcJRA7SzcI.jpg' },
                { id: 1, name: 'Инга Мартиросова', photo: 'https://sun9-5.userapi.com/LVSWYz97MbuEN4jfwzwCgsdujzGFP39gUEUzZw/7kBW1fzBn7I.jpg' },
                { id: 2, name: 'И только дуресь в голове!!!', photo: 'https://sun9-8.userapi.com/c858420/v858420344/179726/n-qN-PuWKY8.jpg' },
                { id: 3, name: 'Евгений Крикунов', photo: 'https://sun1-22.userapi.com/c622731/v622731935/4131f/O3TbwWvQAjQ.jpg' },
                { id: 4, name: 'Влад Шишкин', photo: 'https://sun9-53.userapi.com/c824411/v824411498/192aee/m2MTtnfhWb0.jpg' },
                { id: 5, name: 'Мари Авакова', photo: 'https://sun1-16.userapi.com/c849428/v849428180/190a56/arlTpdzsB_0.jpg' },
                { id: 6, name: 'Екатерина Винтер', photo: 'https://sun9-47.userapi.com/Koztdjxu-_kw23szalRZF6iOKzNaPRec-ihXqw/OLBZEI4aoW4.jpg' },
                { id: 7, name: 'Мария Ноготок', photo: 'https://sun1-86.userapi.com/c857016/v857016326/e708a/rsLryZPtHlQ.jpg' },
                { id: 8, name: 'Алекс Аваков', photo: 'https://sun1-90.userapi.com/c850020/v850020450/19b79e/GVcJRA7SzcI.jpg' }
            ],

            smsData: [
                { id: 1, sms: 'Привет. Как дела?' },
                { id: 2, sms: 'Сообщения вроде работают' },
                { id: 3, sms: 'Ну если это называется работают, до я баллерина :D' }
            ],

            newMessText: ''

        }
    },

    getState() {
        return this._state;
    },
    rRender() {
        console.log('state change');
    },
    subscribe(observer) {
        this.rRender = observer;
    },

    dispatch(action){
        this._state.DialogPage = dialogsReducer(this._state.DialogPage, action);
        this.rRender(this._state);
    }
}

window.store = store;
export default store; */