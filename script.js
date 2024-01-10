// script.js

$(document).ready(function () {
    function loadContent(page) {
        // Reference to the Firebase database
        var database = firebase.database().ref('/data/' + page);

        // Fetch data from Firebase
        database.once('value').then(function(snapshot) {
            var data = snapshot.val();

            // Handlebars rendering
            const template = $('#template').html();
            const compiledTemplate = Handlebars.compile(template);
            const html = compiledTemplate(data);
            $('#content').html(html);
        });
    }

    // Initial load
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    loadContent(currentPage);

    // Navigation click event
    $('nav a').click(function (e) {
        e.preventDefault();
        const page = $(this).attr('href').split('.').shift();
        loadContent(page);
    });
});
