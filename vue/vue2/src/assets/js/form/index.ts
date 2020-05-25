import "../../css/form/index.less"

import Vue from "vue"
import { runWith } from "../common/common"
import * as hljs from "highlight.js"
import "../widget/breadcrumb"

import { ValidationProvider, ValidationObserver, extend } from "vee-validate"
import { required } from "vee-validate/dist/rules"

// extend('required', required)

extend('name', {
  ...required,
  message(field): string {
    return `The name not valid`
  }
})

extend('hobbies', {
  validate(value: String) {
    if (value && value.length > 0) {
      return true
    }
    return 'One of hobbies must be checked'
  },
  computesRequired: true
})

declare interface Birthday {
  year: number,
  month: number,
  date: number
}

class Form {
  name: string = ''
  gender: string = 'M'
  birthday: Birthday = { year: 0, month: 0, date: 0 }
  hobbies: Array<string> = []
  remark: string = ''
}

runWith('form.index', () => {
  // eslint-disable-next-line no-new
  new Vue({
    el: '#app',
    data: {
      form: new Form(),
      formJson: ''
    },
    components: {
      ValidationProvider,
      ValidationObserver
    },
    created() {
      const now = new Date()
      const year = now.getFullYear()
      const month = now.getMonth() + 1
      const date = now.getDate()
      this.form.birthday = { year, month, date }

      hljs.initHighlightingOnLoad()
    },
    mounted() {
      (this as any).$hljs = document.querySelector('.hljs.json') as HTMLElement
    },
    computed: {
      now(): Date {
        return new Date()
      },
      lastMonthDay(): number {
        if (this.form.birthday.month) {
          const now = new Date()
          now.setMonth(this.form.birthday.month)
          now.setDate(0)
          return now.getDate()
        }
        return 0
      }
    },
    watch: {
      form: {
        handler() {
          const $hljs = (this as any).$hljs
          $hljs!.innerText = JSON.stringify(this.form, null, '    ')
          hljs.highlightBlock($hljs!)
        },
        deep: true
      }
    },
    methods: {
      onSubmit() {
        return false
      }
    }
  })
})
