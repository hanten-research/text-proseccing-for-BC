Blockly.Blocks['remove'] = {
  init: function() {
    this.appendValueInput("subject")
        .setCheck("String")
        .appendField("文章「");
    this.appendValueInput("word")
        .setCheck("String")
        .appendField("」から、文字「");
    this.appendDummyInput()
        .appendField("」を消去した文章を作る");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};