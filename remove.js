Blockly.JavaScript['remove'] = function(block) {
  var value_subject =  Blockly.JavaScript.valueToCode(block, 'subject', Blockly.JavaScript.ORDER_ATOMIC);
  var value_word =  Blockly.JavaScript.valueToCode(block, 'word', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = value_subject + '.replace(' + value_word + ', "")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};