export interface TreeNode {
  id: number;
  name: string;
  parentID: number | null;
  isChecked?: boolean;
  children?: TreeNode[];
  showNode?: boolean;
  expanded?: boolean;
}
