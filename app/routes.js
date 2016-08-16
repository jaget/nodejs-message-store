module.exports = {
    get: [
        {
            url: '/messages/:id',
            controller: 'messageController@show'
        }
    ],
    post: [
        {
            url: '/messages',
            controller: 'messageController@save'
        }
    ]
};