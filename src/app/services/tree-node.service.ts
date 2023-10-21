import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TreeNode } from '../interface/interface';

@Injectable({
  providedIn: 'root',
})
export class TreeNodeService {
  private childNodeCreation = new Subject<any>();
  private validateRegistrationForm = new Subject<any>();

  constructor() {}

  setNewNode(treeNode: TreeNode) {
    this.childNodeCreation.next(treeNode);
  }
  getNewNode(): Observable<TreeNode> {
    return this.childNodeCreation.asObservable();
  }
  checkFormValid(validationCondition: any) {
    this.validateRegistrationForm.next(validationCondition);
  }
  verifyValidation(): Observable<any> {
    return this.validateRegistrationForm.asObservable();
  }
}
