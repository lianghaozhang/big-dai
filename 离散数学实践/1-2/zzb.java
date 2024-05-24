import java.util.stream.IntStream;

public class zzb {
    public static void main(String[] args) {
        // 打印表头
        System.out.println("p\tq\tr\t(p && q && !r) <-> ((!p || !q) -> r)");
        // 使用IntStream生成所有可能的 p, q, r 的取值组合
        IntStream.range(0, 2).forEach(p -> // 对于每一个可能的p值（0或1）
                IntStream.range(0, 2).forEach(q ->
                        IntStream.range(0, 2).forEach(r -> {
                            // 计算左侧逻辑表达式的值
                            int le = (p & q & (~r)) & 1;// 计算左侧表达式的值
                            // 计算右侧逻辑表达式的值
                            int re = ((p & q) | r) & 1;// 计算右侧表达式的值
                            // 判断两个表达式是否等价，并打印结果
                            System.out.printf("%d\t%d\t%d\t\t\t\t%d\n", p, q, r, (le == re) ? 1 : 0);   // 打印 p, q, r 取值以及结果
                        })
                )
        );
    }
}
