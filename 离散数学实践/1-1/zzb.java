package 一;

public class zzb {
    public static void main(String[] args) {
        // 定义变量 p, q, r, s，用于表示逻辑表达式中的不同变量
        int p, q, r;
        // 打印表头
        System.out.println("p\tq\tr\t(p && q && !r) <-> ((!p || !q) -> r)");
        // 循环遍历所有可能的 p, q, r的取值组合
        for (p = 0; p <= 1; p++) {
            for (q = 0; q <= 1; q++) {
                for (r = 0; r <= 1; r++) {
                    // 将整数值转换为布尔值，用于构建逻辑表达式
                    boolean pFlag = p != 0;
                    boolean qFlag = q != 0;
                    boolean rFlag = r != 0;
                    // 计算左侧逻辑表达式的值
                    boolean leftExpr = pFlag && qFlag && !rFlag;
                    // 计算右侧逻辑表达式的值
                    boolean rightExpr = (pFlag && qFlag || rFlag);
                    // 判断两个表达式是否等价
                    boolean result = leftExpr == rightExpr;
                    // 打印当前 p, q, r取值组合以及计算结果
                    System.out.printf("%d\t%d\t%d\t\t\t\t%d\n", p, q, r, result ? 1 : 0);
                }
            }
        }
    }
}
