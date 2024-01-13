Blockly.JavaScript['replace'] = function(block) {
  var value_subject = Blockly.JavaScript.valueToCode(block, 'subject', Blockly.JavaScript.ORDER_ATOMIC);
  var value_word1 = Blockly.JavaScript.valueToCode(block, 'word1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_word2 = Blockly.JavaScript.valueToCode(block, 'word2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = value_subject + '.replaceAll(' + value_word1 + ',' + value_word2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};