Blockly.JavaScript['separate'] = function(block) {
  var value_sent = Blockly.JavaScript.valueToCode(block, 'sent', Blockly.JavaScript.ORDER_ATOMIC);
  var value_word = Blockly.JavaScript.valueToCode(block, 'word', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = value_sent + '.split(' + value_word + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};