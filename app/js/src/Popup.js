chrome.storage.sync.get(['scramble'], function(data) {
  var scramble = data.scramble;
  var checkbox = $("[name=scramble]");
  checkbox.attr("checked", scramble);
  checkbox.change(function(e){
    chrome.storage.sync.set({ 'scramble': $(e.target).is(":checked") }, function(){});
  });
});
