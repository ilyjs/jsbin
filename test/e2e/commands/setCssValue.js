exports.command = function(value, callback) {
    this
      .waitForElementVisible('.css .CodeMirror')
      .execute(function (text){
        return $('.css .CodeMirror')[0].CodeMirror.setValue(text);
      }, [value]);

  return this; // allows the command to be chained.
};
