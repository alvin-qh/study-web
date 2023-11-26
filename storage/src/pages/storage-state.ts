import { StorageEventState } from '@/components/storage-event';
import { StorageState } from '@/components/storage-state';

export default (): HTMLElement => {
  const $main = document.createElement('div');

  const $state = document.createElement('div');
  $state.className = 'container content-pane';
  $main.appendChild($state);

  const localState = new StorageState(localStorage, 'LOCAL');
  localState.render($state);

  const $event = document.createElement('div');
  $event.className = 'container content-pane';
  $main.appendChild($event);

  const storageEvent = new StorageEventState();

  window.addEventListener('storage-record', () => {
    localState.render($state);
    storageEvent.render($event);
  });

  return $main;
};
