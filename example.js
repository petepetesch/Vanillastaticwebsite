$(document).ready(function () {
    $('#get-data').click(function () {
      var showData = $('#show-data');
  
      $.getJSON($.getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20WHERE%20symbol%3D%27WRC%27&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback'), function(data) {
        console.log(data);
  
        var items = data.items.map(function (item) {
          return item.key + ': ' + item.value;
        });
  
        showData.empty();
  
        if (items.length) {
          var content = '<li>' + items.join('</li><li>') + '</li>';
          var list = $('<ul />').html(content);
          showData.append(list);
        }
      });
  
      showData.text('Loading the JSON file.');
    });
  });