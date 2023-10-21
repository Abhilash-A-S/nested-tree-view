import { TreeNode } from '../interface/interface';

export class Constance {
  public static buildChildNode = (node: any) => {
    return {
      id: Date.now() + Math.random(),
      name: '',
      parentID: node.id,
      isChecked: false,
      children: [],
      expanded: true,
    };
  };
  public static checkNodeNameAvailable = (nodeList: TreeNode[]) => {
    return nodeList.filter((item: any) => {
      if (!item?.name?.trim()) {
        return true;
      }
      if (item.children && item.children.length > 0) {
        item.children = this.checkNodeNameAvailable(item.children);
        if (item.children.length > 0) {
          return true;
        }
      }
      return false;
    });
  };
}
