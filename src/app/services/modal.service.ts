import { Injectable, Input } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() {}

  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }
  isModalOpen(id: string) {
    console.log(this.modals.find((element) => element.id === id));
    return !!this.modals.find((element) => element.id === id)?.visible;
  }

  toggleModal(id: string) {
    const modal = this.modals.find((element) => element.id === id);
    console.log('I am ', modal);
    if (modal) return (modal.visible = !modal.visible);
  }
}
