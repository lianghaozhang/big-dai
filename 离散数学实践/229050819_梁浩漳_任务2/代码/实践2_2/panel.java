package 实践2_2;

import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;

//panel类
public class panel extends Panel{
    private final Image screenImage = new BufferedImage(571, 937, 2);
    private final Graphics2D screenGraphic = (Graphics2D) screenImage.getGraphics();
    private Image bgImage;

    public panel(String img_url) {
        loadImage(img_url);
        // 设定焦点在本窗体
        setFocusable(true);
        // 设定初始构造时面板大小,这里先采用图片的大小
        setPreferredSize(new Dimension(571,937));
        // 绘制背景
        drawView();
    }
    private void loadImage(String img_url) {
        ImageIcon icon = new ImageIcon(img_url);
        bgImage = icon.getImage();
    }

    private void drawView() {
        screenGraphic.drawImage(bgImage, 0, 0, null);
    }

    public void paint(Graphics g) {
        g.drawImage(screenImage, 0, 0, null);
    }
}