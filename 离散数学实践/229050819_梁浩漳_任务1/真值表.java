package org.example;

public class 真值表 {
    public static void main(String[] args) {
        int p, q, r, s;
        System.out.println("p\tq\tr\ts\t!(p||q)&&((p||r)||s)");
        for (p = 0; p <= 1; p++) {
            for (q = 0; q <= 1; q++) {
                for (r = 0; r <= 1; r++) {
                    for (s = 0; s <= 1; s++) {
                        boolean pFlag = p != 0;
                        boolean qFlag = q != 0;
                        boolean rFlag = r != 0;
                        boolean sFlag = s != 0;
                        System.out.printf("%d\t%d\t%d\t%d\t\t\t\t%d\n",p, q, r, s, (!(pFlag || qFlag)) && ((pFlag || rFlag) || sFlag) ? 1 : 0);
                    }
                }
            }
        }
    }
}