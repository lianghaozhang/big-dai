package 一;

import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartFrame;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.plot.XYPlot;
import org.jfree.data.xy.DefaultXYDataset;

import java.awt.*;

public class sandiantu {
    // 主方法
    public static void main(String[] arg) {
        sandiantu sandian = new sandiantu(); // 创建 sandiantu 类的对象
        double[][] points = new double[2][100000]; // 创建二维数组存储点的坐标
        double x;
        double dx = 0.1; // 设置x的增量 x越小散点图越密集 0.1 0.5 0.05 0.01
        int index = 0; // 初始化索引值
        // 循环生成点的坐标
        for (x = 0; x <= 9; x += dx) {
            double y = (-2) * x * Math.sin(x * x); // 根据函数计算 y 值
            System.out.printf("(x=%f,y=%f)\n", x, y); // 打印点的坐标
            points[0][index] = x; // 存储 x 坐标
            points[1][index] = y; // 存储 y 坐标
            index++; // 索引自增
        }
        sandian.drawSandiantu(points); // 调用绘制散点图方法
    }

    // 定义绘制散点图的方法
    void drawSandiantu(double[][] data) {
        DefaultXYDataset dataset = new DefaultXYDataset();
        dataset.addSeries("x", data); // 添加数据到数据集
        JFreeChart chart = ChartFactory.createScatterPlot("sanDianTu", "t", "x", dataset, // 创建散点图
                PlotOrientation.VERTICAL, true, true, false);
        ChartFrame frame = new ChartFrame("plot", chart, true); // 创建图表框架
        XYPlot xyplot = (XYPlot) chart.getPlot(); // 获取图表的 XYPlot 对象
        xyplot.setWeight(20); // 设置散点大小
        xyplot.setBackgroundPaint(Color.pink); // 设置背景颜色
        xyplot.getDomainAxis().setAxisLineStroke(new BasicStroke(0.2f)); // 设置坐标轴线条粗细
        frame.pack(); // 调整框架大小以适应图表
        frame.setVisible(true); // 设置框架可见
    }
}
