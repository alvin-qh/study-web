import { type MenuItem } from "@/types";

export const menu: MenuItem[] = [
  {
    label: "主页",
    path: "/"
  },
  {
    label: "基本编辑器",
    children: [
      {
        label: "可编辑元素",
        path: "/basic"
      }
    ]
  }
];
