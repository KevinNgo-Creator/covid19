$(document).ready(() => {
  $("#preview").dialog({
    autoOpen: false,
    modal: true,
    height: "auto",
    width: "auto",
    resizable: false
  });
  $('.navbar-burger').click(function(){
    $('#navbarBasicExample').toggle().addClass('is-active');
  });
});
function submitInput() {
  $('#results').empty();
  console.log("HERE");
  const ruralurban = $('#locale').val();
  const terrain = $('#attribute').val();
  if ($("input[name='privacy']:checked").prop('id') === 'morePeople'){
    var people = 'Lots';
  } else {
    var people = 'Fewer';
  }
  if ($("input[name='effort']:checked").prop('id') === 'hard'){
    var effort = 'Hard';
  } else {
    var effort = 'Easy';
  }
  if ($("input[name='price']:checked").prop('id') === 'expensive'){
    var expensive = 'Expensive';
  } else {
    var expensive = 'Reasonable';
  }
  const obj = {
    ruralurban: ruralurban,
    terrain: terrain,
    people: people,
    effort: effort,
    expensive: expensive
  };
  $.post('/api/places', obj)
    .then((res) => {
      const destinations = res.map(location => {
        // console.log(location.latitude,location.longitude);
        return $.get(`/api/images/${location.latitude}/${location.longitude}`)
          .then((data) => {
            return { name: location.name, images: data};
          })
      });
      return destinations;
    })
    .then((dest) => {
      Promise.all( dest ).then(results => {
        // console.log('Send to /api/results/: ', results);
        if (dest.length === 0) {
          alert_msg('','Sorry, No destinations were found.  Please try again.',true,1);
          return false;
        }
        results.forEach( location => {
          $('#results').append($('<h2 class="subtitle">').text(location.name));
          for (let x = 0; x < location.images.length; x++) {
            const el = location.images[x];
            $('#results').append($(`<img class="thumb" src="${el.image.daylight.thumbnail}" data-preview="${el.image.daylight.preview}" title="${el.title}" onclick="showPreview(this)">`));
          }
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
  return false;
}
function showPreview(img) {
  const src = $(img).data('preview');
  $('#bigPicture').attr('src', src);
  $('#preview').dialog('option', 'title', $(img).prop('title'));
  $('#preview').dialog('open');
}
function alert_msg(title, text, mode, level) {
  $("<div id='alertMessage'></div>").dialog({
    autoOpen: false,
    modal: mode,
    height: 'auto',
    width: 500,
    resizable: false,
    buttons: {
      OK: function () {
        $(this).dialog('destroy');
        return false;
      }
    }
  });
  if (title === '') {
    $('#alertMessage').dialog('option', 'dialogClass', 'noTitle');
  } else {
    $('#alertMessage').dialog('option', 'title', title);
  }
  switch (level) {
    case 0:
      $('[aria-describedby="alertMessage"]').css('border', '4px solid royalblue');
      $('#alertMessage').html(
        `<img src="./assets/images/info.png" style="float: left; padding-right: 10px"/> <p style="font-size: medium; font-weight: bold">${  text  }</p>`);
      break;
    case 1:
      $('.ui-widget.ui-widget-content.ui-dialog [aria-describedby="alertMessage"]').css('border', '4px solid gold');
      $('[aria-describedby="alertMessage"]').css('border', '4px solid gold');
      $('#alertMessage').html(
        `<img src="./assets/images/warn.png" style="float: left; padding-right: 10px"/> <p style="font-size: medium; font-weight: bold">${  text  }</p>`);
      break;
    case 2:
      $('[aria-describedby="alertMessage"]').css('border', '4px solid red');
      $('#alertMessage').html(
        `<img src="./assets/images/error.png" style="float: left; padding-right: 10px"/> <p style="font-size: medium; font-weight: bold">${  text  }</p>`);
      break;
    default:
      $('[aria-describedby="alertMessage"]').css('border', '4px solid royalblue');
      $('#alertMessage').html(
        `<img src="./assets/images/confirm.png" style="float: left; padding-right: 10px"/> <p style="font-size: medium; font-weight: bold">${  text  }</p>`);
      break;
  }
  $('#alertMessage').dialog('open');
  return false;
}
