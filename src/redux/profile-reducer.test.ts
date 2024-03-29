import profileReducer, {actions} from './profile-reducer';
import React from 'react';
import {ProfileType} from '../types/types';

let state = {
    posts: [
        {id: 1, message: 'It\'s my first post', likesCount: 12},
        {id: 2, message: 'Hi, how are you?', likesCount: 11},
        {id: 3, message: 'I AM A SAMURAI! and you? ', likesCount: 11},
    ],
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = actions.addPostActionCreator("it-kamasutra.com");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);

});

it('message of new post should be correct', () => {
    // 1. test data
    let action = actions.addPostActionCreator("it-kamasutra.com");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe("it-kamasutra.com");
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = actions.deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = actions.deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});


