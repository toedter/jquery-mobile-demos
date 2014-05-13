var app = angular.module('movies', []);

app.controller('MovieController', ['$scope',
        function MovieController($scope) {
            $scope.movies = [
                { title: 'The Shawshank Redemption'},
                { title: 'The Godfather'},
                { title: 'The Godfather: Part II'},
                { title: 'Pulp Fiction'},
                { title: 'The Good, the Bad and the Ugly'},
                { title: '12 Angry Men'},
                { title: 'The Dark Knight'},
                { title: "Schindler's List"},
                { title: 'The Lord of the Rings'},
                { title: 'The Return of the King'},
                { title: 'Fight Club{ title:'},
                { title: 'Star Wars: Episode V - The Empire Strikes Back'},
                { title: "One Flew Over the Cuckoo's Nest"},
                { title: 'The Lord of the Rings: The Fellowship of the Ring'},
                { title: 'Inception'},
                { title: 'Goodfellas'},
                { title: 'Star Wars'},
                { title: 'Seven Samurai'},
                { title: 'The Matrix'},
                { title: 'Forrest Gump'},
                { title: 'City of God'}
            ]
        }]
);