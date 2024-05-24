package org.example;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartFrame;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.plot.XYPlot;
import org.jfree.data.xy.DefaultXYDataset;
import java.awt.*;

public class sandiantu {
        void drawSandiantu(double[][] data, String name, String title) {
            DefaultXYDataset dataset = new DefaultXYDataset();
            dataset.addSeries(title, data);
            JFreeChart chart = ChartFactory.createScatterPlot(name, "t", "x", dataset,
                    PlotOrientation.VERTICAL, true, true, false);
            ChartFrame frame = new ChartFrame("plot", chart, true);
            XYPlot xyplot = (XYPlot) chart.getPlot();
            xyplot.setWeight(20);
            xyplot.setBackgroundPaint(Color.pink);
            xyplot.getDomainAxis().setAxisLineStroke(new BasicStroke(0.2f));
            frame.pack();
            frame.setVisible(true);
        }


        public static void main(String arg[]) {
            sandiantu sandian = new sandiantu();
            double[][] points = new double[2][100000];
            double x;
            double dx = 0.1;
            int index = 0;
            for (x = 0; x <= 9; x += dx) {
                double y = (-2) * x * Math.sin(x * x);
                System.out.printf("(x=%f,y=%f)\n", x,y);
                points[0][index] = x;
                points[1][index] = y;
                index++;
            }
            sandian.drawSandiantu(points, "sanDianTu", "x");
        }
    }

