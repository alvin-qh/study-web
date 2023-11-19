import Vue from 'vue';

const template = `<div :class="['alert', 'alert-' + type]" role="alert" v-if="!closed">
  <button v-if="closeable === 'true'" type="button" class="close" data-dismiss="alert" aria-label="Close" @click="closeMe">
    <span aria-hidden="true">&times</span>
  </button>
  <slot></slot>
</div>`;

export default Vue.extend({
  template: template,
  props: {
    type: [String],
    closeable: {
      default: 'false'
    },
    speed: {
      default: 'normal'
    }
  },
  data() {
    return {
      closed: false,
      timer: null
    };
  },
  methods: {
    closeMe(): void {
      const self = this as any;
      if (this.timer == null) {
        this.$emit('close');

        let interval = 100;
        switch (this.speed) {
        case 'fast':
          interval = 50;
          break;
        case 'slow':
          interval = 200;
          break;
        }

        let opacity = 1;
        self.timer = setInterval(() => {
          opacity -= 0.2;
          if (opacity <= 0) {
            clearTimeout(self.timer);
            this.timer = null;
            this.closed = true;
            this.$emit('closed');
          }
          self.$el.style.opacity = `${opacity}`;
        }, interval);
      }
    }
  }
});
