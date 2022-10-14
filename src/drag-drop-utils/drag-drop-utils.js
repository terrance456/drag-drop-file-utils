export default class DragDropFile {
    constructor(element, dragFn) {
        this.files = [];
        this.element = element;
        this.dragFn = dragFn;
    }
    handleDrop(event) {
        var _a, _b, _c, _d;
        event.preventDefault();
        event.stopPropagation();
        if (((_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.files) && ((_b = event.dataTransfer) === null || _b === void 0 ? void 0 : _b.files.length) > 0) {
            this.files = [...event.dataTransfer.files];
            (_d = (_c = this.dragFn) === null || _c === void 0 ? void 0 : _c.onDragDrop) === null || _d === void 0 ? void 0 : _d.call(_c, event);
        }
    }
    handleDragEnter(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    handleDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    handleDropLeave(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    intializeDragger() {
        var _a, _b, _c, _d;
        if (!(this.element instanceof HTMLElement)) {
            throw new Error("Not a valid HTMLElement");
        }
        (_a = this.element) === null || _a === void 0 ? void 0 : _a.addEventListener("drop", this.handleDrop.bind(this));
        (_b = this.element) === null || _b === void 0 ? void 0 : _b.addEventListener("dragenter", this.handleDragEnter.bind(this));
        (_c = this.element) === null || _c === void 0 ? void 0 : _c.addEventListener("dragover", this.handleDragOver.bind(this));
        (_d = this.element) === null || _d === void 0 ? void 0 : _d.addEventListener("dragleave", this.handleDropLeave.bind(this));
    }
    getFiles() {
        return this.files;
    }
    clearFiles() {
        this.files = [];
        return this.files;
    }
    removeFile(index) {
        if (isNaN(index)) {
            throw new Error("Index is not a number");
        }
        const newFiles = [...this.files];
        newFiles.splice(index, 1);
        this.files = newFiles;
        return this.files;
    }
}
