Blockly.Blocks['neko'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("\"吾輩は猫である。名前は…\"");
    this.setOutput(true, "String");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};