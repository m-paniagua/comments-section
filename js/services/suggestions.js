app.factory('suggestions', [function() {
    var demoSuggestions = {
        posts: [
            {
                id: 1,
                title: 'Free pizza at club meetings',
                upvotes: 15,
                comments: []
            },
            {
                id: 2,
                title: 'End all club emails with Laffy Taffy jokes',
                upvotes: 9,
                comments: []
            },
            {
                id: 3,
                title: 'Retrofit water fountain with Gatorade',
                upvotes: 7,
                comments: []
            },
            {
                id: 4,
                title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
                upvotes: 3,
                comments: []
            }
        ]
    };
    return demoSuggestions;
}]);