package 实践2_2;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;

public class 图像灰度 {
    public static void main(String[] args) throws IOException {
        BufferedImage bufferedImage = ImageIO.read(new File(("E:\\离散数学\\实践\\shiJian_2\\img\\cyx.jpg")));
        BufferedImage grayImage = new BufferedImage(bufferedImage.getWidth(), bufferedImage.getHeight(), bufferedImage.getType());
        for (int i = 0; i < bufferedImage.getWidth(); i++) {
            for (int j = 0; j < bufferedImage.getHeight(); j++) {
                //获取每个像素点的sRGB
                final int color = bufferedImage.getRGB(i, j);
                //像素的右移得到三原色
                //通过位运算将sRGB转化为RGB值
                final int red = (color >> 16) & 0xff;//右移四位
                final int green = (color >> 8) & 0xff;//右移3为
                final int blue = color & 0xff;
                //运用灰度处理的方法加权平均值
                int gray = (int) (0.3 * red + 0.59 * green + 0.11 * blue);
                //每一个像素点的灰度转化
                int newPixel = colorToRGB(gray, gray, gray);
                //为图片的像素点设置新的RGB值
                grayImage.setRGB(i, j, newPixel);
            }
        }
        ImageIO.write(grayImage, "png", new File(("E:\\离散数学\\实践\\shiJian_2\\img\\灰度.png")));
        new frame("图像灰度处理","E:\\离散数学\\实践\\shiJian_2\\img\\灰度.png");
    }

    private static int colorToRGB(int red, int green, int blue) {
        int newPixel = 0;
        newPixel += 255;
        newPixel = newPixel << 8;
        newPixel += red;
        newPixel = newPixel << 8;
        newPixel += green;
        newPixel = newPixel << 8;
        newPixel += blue;
        return newPixel;
    }
}

