package 实践2_2;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;


public class 图像二值化 {
    public static void main(String[] args) throws Exception {
        BufferedImage image = grayImage(ImageIO.read(new File("E:\\离散数学\\实践\\shiJian_2\\img\\cyx.jpg")));
        image = binaryImage(image, 130);
        ImageIO.write(image, "jpg", new File("E:\\离散数学\\实践\\shiJian_2\\img\\二值化.jpg"));
        image.flush();
        new frame("图像二值化处理","E:\\离散数学\\实践\\shiJian_2\\img\\二值化.jpg");
    }


    public static BufferedImage binaryImage(BufferedImage image, int threshold) {
        int w = image.getWidth();
        int h = image.getHeight();
        int black = new Color(0, 0, 0).getRGB();
        int white = new Color(255, 255, 255).getRGB();
        BufferedImage bufferedImage = new BufferedImage(w, h, BufferedImage.TYPE_BYTE_BINARY);
        for (int x = 0; x < w; x++) {
            for (int y = 0; y < h; y++) {
                int rgb = image.getRGB(x, y);
                int gray = rgb & 0xff;
                if (gray < threshold) {
                    bufferedImage.setRGB(x, y, black);
                } else {
                    bufferedImage.setRGB(x, y, white);
                }
            }
        }
        return bufferedImage;
    }

    public static BufferedImage grayImage(BufferedImage bufferedImage) {
        int width = bufferedImage.getWidth();
        int height = bufferedImage.getHeight();
        BufferedImage grayBufferedImage = new BufferedImage(width, height, bufferedImage.getType());
        for (int i = 0; i < bufferedImage.getWidth(); i++) {
            for (int j = 0; j < bufferedImage.getHeight(); j++) {
                final int color = bufferedImage.getRGB(i, j);
                final int r = (color >> 16) & 0xff;
                final int g = (color >> 8) & 0xff;
                final int b = color & 0xff;
                int gray = (int) (0.3 * r + 0.59 * g + 0.11 * b);
                int newPixel = colorToRGB(255, gray, gray, gray);
                grayBufferedImage.setRGB(i, j, newPixel);
            }
        }
        return grayBufferedImage;
    }

    private static int colorToRGB(int alpha, int red, int green, int blue) {
        int newPixel = 0;
        newPixel += alpha;
        newPixel = newPixel << 8;
        newPixel += red;
        newPixel = newPixel << 8;
        newPixel += green;
        newPixel = newPixel << 8;
        newPixel += blue;

        return newPixel;

    }
}
