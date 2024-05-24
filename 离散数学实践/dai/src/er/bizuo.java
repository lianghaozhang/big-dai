package er;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

public class bizuo {
    public static void main(String[] args) throws IOException {
        // 读取图像文件
        BufferedImage image = ImageIO.read(new File("./src.jpg"));
        //改这里 0.1 0.5 1 2 3...
        float r = (float) 100;
        // 遍历图像的每个像素点
        for (int width = 0; width < image.getWidth(); width++) {
            for (int height = 0; height < image.getHeight(); height++) {
                // 获取当前像素点的颜色值
                int color = image.getRGB(width, height);

                // 提取红、绿、蓝三原色的值
                int red = (color >> 16) & 0xff; // 获取红色分量
                int green = (color >> 8) & 0xff; // 获取绿色分量
                int blue = color & 0xff; // 获取蓝色分量
                // 对每个原色值进行指数运算，以改变颜色强度
                red = (int) Math.pow(red, r);
                green = (int) Math.pow(green, r);
                blue = (int) Math.pow(blue, r);

                // 越界处理，确保颜色值在0到255之间
                red = Math.min(red, 0xff); // 最大值限制
                green = Math.min(green, 0xff);
                blue = Math.min(blue, 0xff);
                red = Math.max(red, 0x00); // 最小值限制
                green = Math.max(green, 0x00);
                blue = Math.max(blue, 0x00);

                // 合成新的RGB颜色值，并将其注入到当前像素点
                int colorToRGB = (blue << 8) + (green << 16) + (red << 24) + 0xff000000;
                image.setRGB(width, height, colorToRGB); // 将修改后的颜色值应用到当前像素点
            }
        }
        // 将处理后的图像写出
        ImageIO.write(image, "jpg", new File("./res.jpg"));
        image.flush();
    }
}