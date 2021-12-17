import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, how are you?', likesCount: 0 },
				{ id: 2, message: "It's my first post", likesCount: 40 },
				{ id: 3, message: "Blalalala", likesCount: 40 },
				{ id: 4, message: "Hey? honey?", likesCount: 40 },
			],
			newPostText: 'it-kamasutra.com',
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Dimych' },
				{ id: 2, name: 'Andrey' },
				{ id: 3, name: 'Sveta' },
				{ id: 4, name: 'Sasha' },
				{ id: 5, name: 'Victor' },
				{ id: 6, name: 'Valera' },
			],
			messages: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'How are you' },
				{ id: 3, message: 'Yo' },
				{ id: 4, message: 'Yo' },
				{ id: 5, message: 'Yo' },
			],
			newMessageBody: 'Yep!',
		},
		sidebar: {},
	},
	_callSubscriber() {
		console.log('State change');
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	},


}


window.store = store;

export default store;