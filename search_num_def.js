Blockly.Blocks['search_num'] = {
  init: function() {
    this.appendValueInput("subject")
        .setCheck("Array")
        .appendField("リスト「");
    this.appendValueInput("number")
        .setCheck("Number")
        .appendField("」の、「");
    this.appendDummyInput()
        .appendField("」番目の文章");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};