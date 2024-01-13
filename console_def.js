Blockly.Blocks['console_log'] = {
  init: function() {
    this.appendValueInput("msg")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を表示する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};