const { Post } = require('../models');

const postData = [
    {
        title: "2214424",
        content: "412421412412124",
        user_id: 1
    },
    {
        title: "213233123213",
        content: "3123321312l",
        user_id: 2
    },
    {
        title: "13312312312321",
        content: "412421412421421412",
        user_id: 2

    },
    {
        title: "123424231",
        content: "3243143434",
        user_id: 5
    },
    {
        title: "43243143214324324",
        content: "2344324324234234",
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
