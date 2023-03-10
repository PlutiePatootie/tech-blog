const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "12313",
        user_id: 2,
        post_id: 3,
        
    },
    {
        comment_text: " 124141",
        user_id: 2,
        post_id: 5,
        
    },
    {
        comment_text: "123",
        user_id: 4,
        post_id: 1,
        
    },
    {
        comment_text: "1241.",
        user_id: 3,
        post_id: 5,
        
    },
    {
        comment_text: "412412",
        user_id: 3,
        post_id: 4,
        
    },
    {
        comment_text: "14412",
        user_id: 2,
        post_id: 1,
        
    },
    {
        comment_text: "14421214",
        user_id: 5,
        post_id: 3,
        
    },
    {
        comment_text: "144122414",
        user_id: 2,
        post_id: 1,
        
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
