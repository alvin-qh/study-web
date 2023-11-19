import '../../css/directive/index.less';
import '../widget/breadcrumb';

import Vue from 'vue';

import { runWith } from '../common/common';
import VueNotifications from '../widget/notifications';


runWith('directive.index', () => {
  new Vue({
    el: '#breadcrumb'
  });

  new Vue({
    el: '#p1',
    data(): Record<string, any> {
      return {
        titleIndex: 0,
        name: '',
        gender: 'M'
      };
    },
    created(): void {
      setInterval(() => {
        this.titleIndex = this.titleIndex > 1 ? 0 : this.titleIndex + 1;
      }, 5000);
    }
  });

  new Vue({
    el: '#p2',
    data(): Record<string, any> {
      return {
        pageCount: 1,
        inputItem: '',
        selectedItem: '',
        items: [] as string[]
      };
    },
    methods: {
      addNewName(): void {
        const self = this as any;
        if (self.inputItem) {
          self.items.push(self.inputItem);
          if (self.items.length === 1) {
            self.selectedItem = self.inputItem;
          }
          self.items.sort();
        }
      },
      selectItem(item: string): void {
        const self = this as any;
        self.selectedItem = item;
      },
      active(current: string): string {
        const self = this as any;
        return current === self.selectedItem ? 'active' : '';
      },
      deleteItem(item: string): void {
        const self = this as any;
        const idx = self.items.indexOf(item);
        if (idx >= 0) {
          self.items = self.items.filter((item: string, n: number) => n !== idx);
        }
      },
      reverseItems(): void {
        const self = this as any;
        self.items = self.items.reverse();
      }
    },
    computed: {
      groupedItems: {
        get(): Record<string, number> {
          const self = this as any;
          const result: Record<string, number> = {};
          for (const item of self.items as string[]) {
            result[item] = result[item] || 0;
            result[item]++;
          }
          return result;
        }
      }
    },
    // @ts-ignore
    notifications: {
      showPage: {
        type: VueNotifications.types.success,
        timeout: 1000
      }
    }
  });

  new Vue({
    el: '#p3',
    data(): Record<string, any> {
      return {
        tab: 'teacher',
        subjects: [
          'Math',
          'English',
          'Chinese',
          'History',
          'Chemistry',
          'Biology',
        ],
        grades: [
          {
            name: 'First',
            classes: [1, 2, 3, 4, 5]
          },
          {
            name: 'Second',
            classes: [1, 2, 3, 4]
          },
          {
            name: 'Third',
            classes: [1, 2, 3, 4]
          },
          {
            name: 'Fourth',
            classes: [1, 2, 3]
          }
        ],
        student: {
          name: '',
          gender: 'M',
          phone: '',
          grade: '',
          class: '',
          remark: ''
        },
        teacher: {
          name: '',
          gender: 'M',
          subject: '',
          phone: '',
          remark: ''
        },
        other: {
          name: '',
          phone: ''
        }
      };
    },
    computed: {
      gradeClass: {
        get(): string[] {
          if (this.student.grade) {
            const grade = this.grades.find((g: Record<string, any>) => g.name === this.student.grade);
            if (grade) {
              return grade.classes;
            }
          }
          return [];
        }
      }
    },
    watch: {
      'student.grade'() {
        this.student.class = '';
      }
    },
    methods: {
      active(name: string): string {
        return name === this.tab ? 'active' : '';
      },
      changeTab(name: string): void {
        this.tab = name;
      }
    }
  });
});
