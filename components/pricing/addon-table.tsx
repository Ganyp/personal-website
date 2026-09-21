import { addonItems } from "@/lib/pricing"

/**
 * 加购项目表格
 * 职责：以行式表格罗列套餐之外可加购的服务与费用。
 * 排版：名称 + 说明 + 费用三列，移动端说明列隐藏以保证可读。
 */
function AddonTable() {
  return (
    <div className="overflow-x-auto border border-border">
      <table className="w-full min-w-[32rem] text-sm">
        <thead>
          <tr className="border-b border-border text-left text-xs tracking-[0.2em] text-muted-foreground uppercase">
            <th className="px-6 py-4 font-normal">项目</th>
            <th className="px-6 py-4 font-normal">说明</th>
            <th className="px-6 py-4 text-right font-normal">费用</th>
          </tr>
        </thead>
        <tbody>
          {addonItems.map((item) => (
            <tr
              key={item.name}
              className="border-b border-border/70 last:border-0"
            >
              <td className="px-6 py-4 font-medium">{item.name}</td>
              <td className="px-6 py-4 text-muted-foreground">
                {item.description}
              </td>
              <td className="px-6 py-4 text-right whitespace-nowrap">
                {item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export { AddonTable }
