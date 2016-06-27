/* eslint-disable no-undef */

$(document).ready(inits);

function init() {
  $('#newCityForm').show();
  $('#cityProfile').hide();
  $('#submitBtn').click(saveCity);
}

function saveCity() {
  const name = $('#cityName').val();
  const cost = $('#cityCost').val() * 1;
  const countryId = $('#countryId').val();
  const photos = $('.photoIn').val();
  const balance = $('#cityBalance').val() * 1;
  $.ajax({
    url: '/cities/',
    method: 'post',
    dataType: 'json',
    data: { name, cost, countryId, photos, balance },
    success: (rsp) => {
      $('#newCityForm').hide();
      $('#cityProfile').show();
      $('#success').append(rsp.name);
    },
  });
}
