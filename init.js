
// QA Worm 0.3
// Developer: Michael "Spell" Spellacy, Developer: Michael "Spell" Spellacy. Twitter: @spellacy, GitHub: michaelspellacy
// Dependency: jQuery (Plain Vanilla coming soon)

$(function() {

  $('head').append('<link rel="stylesheet" href="https://michaelspellacy.github.io/qa-worm/lint.css"/>');

  $('html').addClass("lint").append('<button id="btn-lint" title="HTML Linter">QA Worm</button>');

  $('#btn-lint').on('click', function(){

    $(this).toggleClass('active');
    $('html').toggleClass('lint');

  });

});