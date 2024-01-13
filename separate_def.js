Blockly.Blocks['separate'] = {
  init: function() {
    this.appendValueInput("sent")
        .setCheck("String")
        .appendField("文章「");
    this.appendValueInput("word")
        .setCheck("String")
        .appendField("」を、右の文字「");
    this.appendDummyInput()
        .appendField("」で分割してリストを作る");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};