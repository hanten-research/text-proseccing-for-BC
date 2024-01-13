Blockly.Blocks['search_word'] = {
  init: function() {
    this.appendValueInput("subject")
        .setCheck(null)
        .appendField("リスト「");
    this.appendValueInput("word")
        .setCheck(null)
        .appendField("」の中で、文字「");
    this.appendDummyInput()
        .appendField("」を含む文章のみを集めたリスト");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};