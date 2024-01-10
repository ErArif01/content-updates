$(document).ready(function () {
  function loadContent(page) {
    $.getJSON(`data/${page}.json`, function (data) {
      const template= $('#template'.html();
      const compiledTemplate = Handlebars.compile(template);
      const html = compiledTemplate(data);
      $('#content').html(html);
    });
  }

  const currentPage = window.location.pathname.split('/').pop().split('.')[0];
  loadContent(currentPage);

  $('nav a').click(function (e) {
        e.preventDefault();
        const page = $(this).attr('href').split('.').shift();
        loadContent(page);

    });
});
