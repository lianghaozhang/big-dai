import 实践2_2.frame;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import static java.lang.Math.*;

public class 实践2_1 {
    public static void main(String[] args) throws IOException {
        BufferedImage image = ImageIO.read(new File("E:\\离散数学\\实践\\shiJian_2\\img\\hua.jpg"));
        System.out.println("width:" + image.getWidth() + ",height:" + image.getHeight());
        float r = (float) 10;
        for (int width = 0; width < image.getWidth(); width++) {
            for (int height = 0; height < image.getHeight(); height++) {
                int color = image.getRGB(width, height);
                //提取三原色
                int red = (color >> 16) & 0xff;
                int green = (color) & 0xff;
                int blue = (color >> 8) & 0xff;
                red = (int) pow(red,r);
                green = (int) pow(green,r);
                blue = (int) pow(blue,r);
                //越界处理
                //限制大于0 小于255
                red = Math.min(red, 0xff);
                green = Math.min(green, 0xff);
                blue = Math.min(blue, 0xff);
                red = Math.max(red, 0x00);
                green = Math.max(green, 0x00);
                blue = Math.max(blue, 0x00);

                //合成RBG 再将RGB注入像素点中
                int colorToRGB = green + (blue << 8) + (red << 16) + (0xff000000);
                image.setRGB(width, height, colorToRGB);
            }
        }
        ImageIO.write(image, "jpg", new File("E:\\离散数学\\实践\\shiJian_2\\img\\res.jpg"));
        image.flush();
        new frame("实践二必做","E:\\离散数学\\实践\\shiJian_2\\img\\res.jpg");
    }
}

