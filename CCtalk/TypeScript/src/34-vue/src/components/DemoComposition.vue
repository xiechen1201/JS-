<script setup lang="ts">
import { ref, type PropType } from "vue";

// 方式1
/* const props = defineProps({
  a: {
    type: String,
    default: "Hello"
  }
}); */

// 方式2
/* interface IProps {
  a: string;
}
const props = withDefaults(defineProps<IProps>(), {
  a: "Hello"
}); */

// 默认值为引用值
/* interface IProps {
  a: string;
}
const props = withDefaults(defineProps<IProps>(), {
  a: "Hello",
  b: () => ({})
}); */

// =====================

/* // 复杂类型
interface IObj {
  a: number;
  b: number;
}
// 尖角号是泛型的参数传递的地方
// <IObj>  其实就是对象类型
const props = defineProps<IObj>();  */

// =======================

/* interface IProps {
  id: number;
  content: string;
  completed: boolean;
}

// 让 Object 作为 IProps 容器定义类型
const props = defineProps({
  todo: Object as PropType<IProps>
}); */

// ===========

/* const emit = defineEmits(["update"]);
emit("update", { a: 1, b: 2, c: 3 }); */

/* const emit = defineEmits<{
  (event: "update", { a, b }: { a: number; b: number }): void;
}>();
emit("update", { a: 1, b: 2, c: 3 }); */

// ===============

const aRef = ref(10); // Ref<number>
console.log(aRef)
</script>
