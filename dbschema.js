let db = {
    users : [

    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is a scream body',
            createdAt: '2019-03-15T11:46:01.018Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'kdfasjh384',
            body: 'this is a scream body',
            createdAt: '2019-03-15T11:46:01.018Z'
        }
    ]
};

const userDetails = {
    //redux data
    credentials: {
        userId: 'NK6HL87DVJ8TVB',
        email: "user@email.com",
        handle: 'user',
        createdAt: "2019-03-15",
        imageUrl: "'https://user.com",
        bio: 'Hello, my name is user, nice to meet you',
        website: 'https://user.com',
        location: 'Cali, USA',
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'hh604kj3k2jb32kj5'
        },
        {
            userHandle: 'user',
            screamId: 'lsdf9saljhb354jhbf'
        }
    ]
}