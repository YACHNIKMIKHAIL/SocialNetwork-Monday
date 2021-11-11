import img1 from './../Images/avas/07294d2cc267da73123775dcbf9c5e5b.jpeg'

export type MyMessageType = {
    myMessage: string
}
export type FriendMessageType = {
    friendMessage: string
}

export type MessagesType = {
    myMessages: Array<MyMessageType>
    friendMessages: Array<FriendMessageType>
}
export type MyPostType = {
    id: number
    post: string
    likeCount: number
}
export type BioType={
    title:string
    age:number
}
export type MyInfoType = {
    img: string
    bio: BioType

}
export type ProfileType={
    myInfo:MyInfoType
    myPosts: Array<MyPostType>
}

export type StateType = {
    messages: MessagesType
    Profile: ProfileType
}

export const State: StateType = {
    Profile: {
        myInfo: {
            img: img1,
            bio: {
                title: 'Hi my name is Misha',
                age: 30
            }
        },

        myPosts: [
            {id: 1, post: ' Oh now I dont like props!!!', likeCount: 11},
            {id: 2, post: ' Oh now I HATE props!!!', likeCount: 32},
            {id: 3, post: ' Wow yo you catch this!!!', likeCount: 3},
            {id: 4, post: ' Do you want to go home?', likeCount: 23},
            {id: 5, post: ' No I like this props!!!', likeCount: 3},
            {id: 6, post: ` I don't HATE props!!!`, likeCount: 34},
            {id: 7, post: ' Yes I catch this!!!', likeCount: 2},
            {id: 8, post: ' bvjkabdvladi?', likeCount: 6},
        ]
    },
    messages: {
        myMessages: [
            {myMessage: 'Hi'},
            {myMessage: 'How are you?'}
        ],
        friendMessages: [
            {friendMessage: 'Hello'},
            {friendMessage: 'Fine=)'}
        ]
    }
}
