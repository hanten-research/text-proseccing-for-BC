Blockly.JavaScript['search_word'] = function(block) {
  var value_subject = Blockly.JavaScript.valueToCode(block, 'subject', Blockly.JavaScript.ORDER_ATOMIC);
  var value_word = Blockly.JavaScript.valueToCode(block, 'word', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = value_subject + '.filter(temp => temp.indexOf(' + value_word + ') !== -1)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};