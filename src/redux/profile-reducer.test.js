import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import React from "react";

let state = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 0 },
		{ id: 2, message: "It's my first post", likesCount: 40 },
		{ id: 3, message: "Blalalala", likesCount: 40 },
		{ id: 4, message: "Hey? honey?", likesCount: 40 },
	],
};

test('length of posts should be incremented', () => {
	// даем исходные данные
	let action = addPostActionCreator("it-kama");

	// делаем какой-то экшион
	let newState = profileReducer(state, action);

	//проверяем ожидания
	expect(newState.posts.length).toBe(5);
});


test('message of post should be correct', () => {
	// даем исходные данные
	let action = addPostActionCreator("it-kama");

	// делаем какой-то экшион
	let newState = profileReducer(state, action);

	//проверяем ожидания
	expect(newState.posts[4].message).toBe("it-kama");
});

test('after deleting length of messages should be decrement', () => {
	// даем исходные данные
	let action = deletePost(1);

	// делаем какой-то экшион
	let newState = profileReducer(state, action);

	//проверяем ожидания
	expect(newState.posts.length).toBe(3);
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
	// даем исходные данные
	let action = deletePost(1000);

	// делаем какой-то экшион
	let newState = profileReducer(state, action);

	//проверяем ожидания
	expect(newState.posts.length).toBe(4);
});


