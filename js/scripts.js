$(document).ready(function() {
    // Create the table
    var rows = 3;
    var cols = 5;
    var initialImage = 'images/chevre.jfif';
    var images = [
        'images/cheval.png', 'images/snake.jfif', 'images/image4.jpg', 'images/image5.jpg',
        'images/image6.jpg', 'images/image7.jpg', 'images/image8.jpg', 'images/image9.jpg',
        'images/image10.jpg', 'images/image11.jpg', 'images/image12.jpg', 'images/image13.jpg',
        'images/image14.jpg', 'images/image15.jpg', 'images/image16.jpg'
    ];
    var images_jeu = [
        'images/snake.jfif', 'images/chevre.jfif', 'images/image4.jpg', 'images/image5.jpg',
        'images/image6.jpg', 'images/image7.jpg', 'images/image8.jpg', 'images/image9.jpg',
        'images/image10.jpg', 'images/image11.jpg', 'images/image12.jpg', 'images/image13.jpg',
        'images/image14.jpg', 'images/image15.jpg', 'images/image16.jpg'
    ];
    var titles = [
        'Title for ime 1', 'Title for image 2', 'Title for image 3', 'Title for image 4',
        'Title for image 5', 'Title for image 6', 'Title for image 7', 'Title for image 8',
        'Title for image 9', 'Title for image 10', 'Title for image 11', 'Title for image 12',
        'Title for image 13', 'Title for image 14', 'Title for image 15'
    ];
    var rules = [
        '<section>Rule for igrgrgmage 1</section>', '<section>Rule for image 2</section>',
        '<section>Rule for image 3</section>', '<section>Rule for image 4</section>',
        '<section>Rule for image 5</section>', '<section>Rule for image 6</section>',
        '<section>Rule for image 7</section>', '<section>Rule for image 8</section>',
        '<section>Rule for image 9</section>', '<section>Rule for image 10</section>',
        '<section>Rule for image 11</section>', '<section>Rule for image 12</section>',
        '<section>Rule for image 13</section>', '<section>Rule for image 14</section>',
        '<section>Rule for image 15</section>'
    ];

    var imgIndex = 0;
    var titleNumber = 1;

    for (var i = 0; i < rows; i++) {
        var row = '<tr>';
        for (var j = 0; j < cols; j++) {
            if (imgIndex < images.length) {
                row += `
                    <td>
                        <div class="image-container">
                            <div class="title">${titleNumber}</div>
                            <img src="${initialImage}" class="toggleImage" data-next-image="${images[imgIndex]}">
                        </div>
                    </td>
                `;
                imgIndex++;
                titleNumber++;
            }
        }
        row += '</tr>';
        $('#imageTable tbody').append(row);
    }

    // Image click event
    $(document).on('click', '.toggleImage', function() {
        var nextImage = $(this).attr('data-next-image');
        $(this).attr('src', nextImage);
    });

    // Create links
    for (var k = 1; k <= 15; k++) {
        $('#linksContainer').append(`<span class="modal-link" data-index="${k}">${k}</span> `);
    }

    // Modal functionality
    var modal = $('#myModal');
    var span = $('.close');

    $(document).on('click', '.modal-link', function() {
        var index = $(this).data('index');
        $('#modalTitle').text(titles[index - 1]);
        $('#modalImage').attr('src', images_jeu[index - 1]);
        $('#modalRules').html(rules[index - 1]);
        modal.show();
    });

    // Close the modal
    span.on('click', function() {
        modal.hide();
    });

    $(window).on('click', function(event) {
        if ($(event.target).is(modal)) {
            modal.hide();
        }
    });
});
