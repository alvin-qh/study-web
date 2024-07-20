import { Ref, ref, onMounted } from "vue";

// 定义一个组合函数, 用于获取指定元素上指定属性的属性值, 返回一个 `Record` 类型对象, 表示所获取属性值的 Key 和 Value
export function useElementAttrs(elem: Ref<HTMLDivElement | undefined>, attrNames: string[]): Ref<Record<string, string | null>> {
  // 定义响应式变量, 存储元素的属性
  const r = ref<Record<string, string | null>>({});

  onMounted(() => {
    const e = elem.value;
    if (e) {
      const attrs: Record<string, string | null> = {};
      // 获取元素上指定属性的值
      attrNames.forEach(n => attrs[n] = e.getAttribute(n));

      // 将获取的属性值赋值到响应式变量
      r.value = attrs;
    }
  });

  return r;
}
