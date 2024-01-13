Blockly.JavaScript['console_log'] = function(block) {
  var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = 'alert(' + value_msg + ');';
  return code;
};