import { shallowMount } from '@vue/test-utils';
import CameraPanel from '@/components/CameraPanel.vue';

describe('test "CameraPanel" component', () => {
  it('loading text', () => {
    const wrapper = shallowMount(CameraPanel);
    // expect(wrapper.find('.alv-video-loadding').text()).toMatch('Loading...');
  });
});
