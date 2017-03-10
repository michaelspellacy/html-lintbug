// HTML LintBug 0.5
// Developer: Michael "Spell" Spellacy, Developer: Michael "Spell" Spellacy. Twitter: @spellacy, GitHub: michaelspellacy
// Dependency: jQuery

$(function() {

  $('html').addClass("lintbug").append('<button id="btn-lintbug" type="button" title="HTML LintBug">Debug</button>');

  // $('head').append('<link rel="stylesheet" href="lintbug.css">');

  $('head').append('<link id="html-lintbug" rel="stylesheet" href="https://michaelspellacy.github.io/html-lintbug/lintbug.css">');

  $('#btn-lintbug').on('click', function(){

    $(this).toggleClass('active');
    $('html').toggleClass('lintbug');

  });

  // Rules for elements where pseudo's not possible

  $('iframe:not([title])').after('<div class="lintbug-iframe"/>');
  $('img:not([alt])').after('<div class="lintbug-img"/>');

});