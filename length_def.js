Blockly.Blocks['length'] = {
  init: function() {
    this.appendValueInput("subject")
        .setCheck("Array")
        .appendField("リスト「");
    this.appendDummyInput()
        .appendField("」に含まれる文章の数");
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};