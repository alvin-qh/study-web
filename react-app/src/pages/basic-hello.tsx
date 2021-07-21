/**
 * 定义标签属性
 */
type BasicHelloProp = {
  name?: string   // 标签具备'name'属性，可选
}

const BasicHello = ({ name }: BasicHelloProp) => (
  <h1 className="text-center text-3xl font-bold py-10">
    Hello {name || "World"}
  </h1>
)

export default BasicHello;
