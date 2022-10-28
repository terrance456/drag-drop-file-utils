import { DragEventCallbacks } from "../types/general.type";

export class DragDropFile {
  constructor(element: HTMLElement, dragFn: DragEventCallbacks) {
    this.element = element;
    this.dragFn = dragFn;
  }

  private files: Array<File> = [];
  private element: HTMLElement;
  private dragFn: DragEventCallbacks;

  private handleDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer?.files && event.dataTransfer?.files.length > 0) {
      this.files = [...event.dataTransfer.files];
      this.dragFn?.onDragDrop?.(event);
    }
  }

  private handleDragEnter(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  private handleDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  private handleDropLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  public intializeDragger() {
    if (!(this.element instanceof HTMLElement)) {
      throw new Error("Not a valid HTMLElement");
    }

    this.element?.addEventListener("drop", this.handleDrop.bind(this));
    this.element?.addEventListener("dragenter", this.handleDragEnter.bind(this));
    this.element?.addEventListener("dragover", this.handleDragOver.bind(this));
    this.element?.addEventListener("dragleave", this.handleDropLeave.bind(this));
  }

  public getFiles() {
    return this.files;
  }

  public clearFiles() {
    this.files = [];
    return this.files;
  }

  public removeFile(index: number) {
    if (isNaN(index)) {
      throw new Error("Index is not a number");
    }
    const newFiles: Array<File> = [...this.files];
    newFiles.splice(index, 1);
    this.files = newFiles;
    return this.files;
  }
}
