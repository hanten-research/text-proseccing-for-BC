Blockly.Blocks['replace'] = {
  init: function() {
    this.appendValueInput("subject")
        .setCheck("String")
        .appendField("文章「");
    this.appendValueInput("word1")
        .setCheck("String")
        .appendField("」に含まれる文字「");
    this.appendValueInput("word2")
        .setCheck("String")
        .appendField("」を「");
    this.appendDummyInput()
        .appendField("」に変えた文章を作る");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};