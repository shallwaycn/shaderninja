export default class ErrorsDisplay {
    constructor(main, editor, errorEvent) {
        this.main = main;

        //  private variables
        this.widgets = [];

        this.editor = editor;

        // EVENTS
        this.main.threeCanvas.on('frag_error', (arg) => {
            this.clean();
            this.addError(arg);
        });

        this.main.threeCanvas.on('vertex_error', (arg) => {
            this.clean();
            this.addError(arg);
        });

        this.editor.on('changes', (cm, changesObjs) => {
            if (this.main.threeCanvas.isValid) {
                this.clean();
            }
        });
    }

    clean() {
        for (let i = 0; i < this.widgets.length; i++) {
            this.editor.removeLineWidget(this.widgets[i]);
        }
        this.widgets.length = 0;
    }

    addError(args) {
        let re = /ERROR:\s+\d+:(\d+):\s+('.*)/g;
        let matches = re.exec(args.error);
        if (matches) {
            let line = parseInt(matches[1]);
            let headerLine = args.headerLine;
            line -= headerLine;
            let er = matches[2];
            let msg = document.createElement('div');

            let icon = msg.appendChild(document.createElement('span'));
            icon.className = 'ge-error-icon';
            icon.innerHTML = 'x';
            msg.appendChild(document.createTextNode(er));
            msg.className = 'ge-error';
            this.widgets.push(this.editor.addLineWidget(line, msg));//, { coverGutter: false, noHScroll: true }));
        }
    }
}
