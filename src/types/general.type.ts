export interface DragEventCallbacks {
  onDragDrop?: (e: DragEvent | Event) => void;
  onDragEnter?: (e: DragEvent) => void;
  onDragOver?: (e: DragEvent) => void;
  onDragLeave?: (e: DragEvent) => void;
}
