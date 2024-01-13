Blockly.JavaScript['search_num'] = function(block) {
  var value_subject = Blockly.JavaScript.valueToCode(block, 'subject', Blockly.JavaScript.ORDER_ATOMIC);
  var value_number = Blockly.JavaScript.valueToCode(block, 'number', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = value_subject + '[' + value_number + ' - 1]';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};