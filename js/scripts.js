$(document).ready(function() {
    // Create the table
    var rows = 3;
    var cols = 5;
    var initialImage = 'images/chevre.jfif';
    var images = [
        'images/manu.jpg', 'images/cheval.png', 'images/remi.jpg', 'images/joint.jpg',
        'images/dents.jpg', 'images/tower.jpg', 'images/snake.jfif', 'images/car.jpg',
        'images/jim.jfif', 'images/wario.jfif', 'images/civil.jfif', 'images/indiana.png',
        'images/digi.jpeg', 'images/inge.jpg', 'images/super.jfif'
    ];
    var images_jeu = [
        'images/smash.jfif', 'images/hotline.jpg', 'images/mario.jpg', 'images/micro.jfif',
        'images/goldeneye.jfif', 'images/towerfall.jfif', 'images/simple.png', 'images/street.jfif',
        'images/robotnik.jfif', 'images/soup.jfif', 'images/nidd.jfif', 'images/iwanna.jfif',
        'images/poke.jfif', 'images/poly.jfif', 'images/superm.jfif'
    ];
    var images_jeu_ingame = [
        'images/smash1.jpg', 'images/hotline1.jpg', 'images/mario1.jpg', 'images/micro1.jfif',
        'images/goldeneye1.jfif', 'images/towerfall1.jfif', 'images/simple1.png', 'images/street1.jfif',
        'images/robotnik1.jfif', 'images/soup1.jfif', 'images/nidd1.jfif', 'images/iwanna1.jfif',
        'images/poke1.jfif', 'images/poly1.jfif', 'images/superm1.jfif'
    ];
    var titles = [
        'Smash Bros Ultimate', 'Hotline Miami 2', 'Mario kart 64', 'Micromachine 2',
        'Goldeneye 64', 'TowerFall Ascension', 'Tron', 'Street fighter 2',
        'Dr Robotnik Beam Machine', 'Game soup', 'Niddhog 2', 'I wanna be the guy',
        'Pokemon bleue', 'Polybridge', 'Super Meat Boy'
    ];
    var rules = [
        '<section><p> - Fight 2 Versus 2</p><p> - Bo3</p><p> - 4 vies</p><p> - full objets</p><p> - Niveau choisit par la chèvre</p></section>',
        '<section><p> - Race Speedrun 1 Versus 1 </p><p> - 1er au niveau ???</p></section>',
        '<section><p> - Race 1 Versus 1 </p><p> - Bo3</p><p> - 150 cc</p><p> - 1 course avec bot</p><p> - Niveau choisit par la chèvre</p></section>',
        '<section><p> - Race 1 Versus 1 </p><p> - Bo3</p><p> - Niveau choisit par la chèvre</p></section>',
        '<section><p> - Death match 1 Versus 1 </p><p> - Bo3</p><p> - Golden gun only</p><p> - Nain obligatoire</p><p> - Niveau choisit par la chèvre</p></section>',
        '<section><p> - Death match 2 Versus 2 </p><p> - 5 / 10 points gagnants</p><p> - Niveau choisit par la chèvre</p><p> La brume ça tue</p></section>',
        '<section><p> - Match 1 Versus 1 </p><p> - Bo3</p></section>',
        '<section><p> - Fight 1 Versus 1 </p><p> - Bo3 de Bo3</p></section>',
        '<section><p> - Match 1 Versus 1 </p><p> - Bo3</p><p> - Difficulté normale</p></section>',
        '<section><p> - Run 1 Versus 1</p><p> - Last man standing</p><p> - Une seule partie</p></section>',
        '<section><p> - Fight 1 Versus 1</p><p> - Bo3</p></section>',
        '<section><p> - Race 1 Versus 1</p><p> - 1er à atteindre le Boss du niveau 1</p></section>',
        '<section><p> - Race 1 Versus 1</p><p> - Save préparée</p><p> - 1er à avoir 4 pokemon dans sa team</p></section>',
        '<section><p> - Race 1 Versus 1</p><p> - 1er à finir le niveau ???</p></section>',
        '<section><p> - Race 1 Versus 1</p><p> - 1er à atteindre le niveau ???</p></section>'
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
        $('#modalImageIngame').attr('src', images_jeu_ingame[index - 1]);
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
