Promise.all(
	["workspace.xml", "toolbox.xml"].map(async file => {
		return fetch(file).then(
			(res) => {
				return res.text();
			}
		);
	})
).then((xmls) => {
	xmls.forEach((xml) => {
		var parser = new DOMParser();
		var doc = parser.parseFromString(xml, "application/xml");
		document.body.appendChild(doc.documentElement);
	});
}).then(() => {

	/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
	var toolbox = document.getElementById("toolbox");

	var options = {
		toolbox: toolbox,
		collapse: true,
		comments: true,
		disable: true,
		maxBlocks: Infinity,
		trashcan: true,
		horizontalLayout: false,
		toolboxPosition: 'start',
		css: true,
		media: 'https://blockly-demo.appspot.com/static/media/',
		rtl: false,
		scrollbars: true,
		sounds: true,
		oneBasedIndex: true,
		grid: {
			spacing: 20,
			length: 1,
			colour: '#888',
			snap: false
		},
		zoom: {
			controls: true,
			wheel: true,
			startScale: 1,
			maxScale: 3,
			minScale: 0.3,
			scaleSpeed: 1.2
		}
	};

	/* Inject your workspace */
	var workspace = Blockly.inject('blocklyDiv', options);

	/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

	/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
	var workspaceBlocks = document.getElementById("workspaceBlocks");

	/* Load blocks to workspace. */
	Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

	const pre = document.getElementById('jsCode');
	/* JavaScriptを表示する場合は下をアクティブにする */
	pre.innerHTML = Blockly.JavaScript.workspaceToCode(workspace);

	Blockly.JavaScript.INFINITE_LOOP_TRAP = null;

	/* JavaScriptを表示する場合は下をアクティブにする */
	function showCode() {
		Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
		const pre = document.getElementById('jsCode');		
		pre.innerHTML = Blockly.JavaScript.workspaceToCode(workspace);
		const alerttest = "testmessage"
		alert(alerttest);
		alert(document.getElementById('jsCode'));
	}
	document.getElementById('showCode').addEventListener('click', showCode, false);
	
	function execCode() {
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
        try {
            eval(Blockly.JavaScript.workspaceToCode(workspace));
        } catch (e) {
            alert(e);
        }
    }
    document.getElementById('execCode').addEventListener('click', execCode, false); 

});
