package com.TTT.Tniciu_API.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Autowired
    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendVerificationEmail(String to, String token, String email) throws MessagingException {
        String subject = "Xác nhận đăng ký tài khoản - CM FASHION";
        String verificationLink = "http://localhost:8080/verify?token=" + token + "&email=" + email;

        String content = "<!DOCTYPE html>"
                + "<html lang=\"vi\">"
                + "<head>"
                + "    <style>"
                + "        body { font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 0; }"
                + "        .email-container { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); }"
                + "        .header { background-color: #008b4b; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }"
                + "        .header img { max-width: 100px; margin-bottom: 10px; }"
                + "        .header h1 { color: #ffffff; font-size: 24px; margin: 0; }"
                + "        .content { padding: 20px; color: #333333; line-height: 1.6; }"
                + "        .content h2 { color: #008b4b; font-size: 20px; margin-bottom: 10px; }"
                + "        .btn { display: inline-block; background-color: #008b4b; color: #ffffff; text-decoration: none; padding: 10px 20px; font-size: 16px; border-radius: 5px; margin-top: 20px; }"
                + "        .footer { text-align: center; font-size: 14px; color: #777777; margin-top: 20px; padding: 10px; border-top: 1px solid #eeeeee; }"
                + "        .footer a { color: #008b4b; text-decoration: none; }"
                + "    </style>"
                + "</head>"
                + "<body>"
                + "    <div class=\"email-container\">"
                + "        <div class=\"header\">"
                + "            <img src=\"https://res.cloudinary.com/dccqifics/image/upload/v1732087229/rrb8w83wzhr8ay1vhlln.jpg\" alt=\"Website Store Logo\">"
                + "            <h1>CM FASHION</h1>"
                + "        </div>"
                + "        <div class=\"content\">"
                + "            <h2>Chào mừng bạn đến với CM FASHION!</h2>"
                + "            <p>Cảm ơn bạn đã đăng ký tài khoản tại <strong>CM FASHION</strong>. Để hoàn tất quá trình đăng ký, vui lòng nhấn vào nút dưới đây để kích hoạt tài khoản của bạn:</p>"
                + "            <p style=\"text-align: center;\"><a href=\"" + verificationLink + "\" class=\"btn\">Kích hoạt tài khoản</a></p>"
                + "            <p>Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua email này. Nếu bạn cần hỗ trợ, hãy liên hệ với chúng tôi qua <a href=\"mailto:support@websitestore.com\">support@websitestore.com</a>.</p>"
                + "        </div>"
                + "        <div class=\"footer\">"
                + "            <p>&copy; 2024 CM FASHION. Tất cả quyền được bảo lưu.</p>"
                + "            <p><a href=\"https://websitestore.com\">Truy cập website</a> | <a href=\"https://websitestore.com/help\">Hỗ trợ</a></p>"
                + "        </div>"
                + "    </div>"
                + "</body>"
                + "</html>";

        sendEmail(to, subject, content);

    }

    public void sendVerificationSuccessEmail(String to) throws MessagingException {
        String subject = "Kích hoạt tài khoản thành công - CM FASHION";
        String content = "<!DOCTYPE html>"
                + "<html lang=\"vi\">"
                + "<head>"
                + "    <style>"
                + "        body { font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0; }"
                + "        .email-container { max-width: 600px; margin: auto; background: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); }"
                + "        .header { background-color: #008b4b; padding: 10px; text-align: center; border-radius: 10px 10px 0 0; }"
                + "        .header h1 { color: #ffffff; font-size: 24px; margin: 0; }"
                + "        .content { padding: 20px; }"
                + "        .content p { font-size: 16px; line-height: 1.6; color: #333333; }"
                + "        .btn { display: inline-block; background-color: #008b4b; color: #ffffff; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-size: 16px; }"
                + "        .footer { text-align: center; padding: 10px; font-size: 14px; color: #777777; margin-top: 20px; }"
                + "    </style>"
                + "</head>"
                + "<body>"
                + "    <div class=\"email-container\">"
                + "        <div class=\"header\">"
                + "            <h1>CM FASHION</h1>"
                + "        </div>"
                + "        <div class=\"content\">"
                + "            <p>Chào bạn,</p>"
                + "            <p>Cảm ơn bạn đã đăng ký tài khoản tại <strong>CM FASHION</strong>. Để hoàn tất quá trình đăng ký, vui lòng nhấn vào nút dưới đây để kích hoạt tài khoản:</p>"
                + "            <p>Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua email này.</p>"
                + "        </div>"
                + "        <div class=\"footer\">"
                + "            <p>&copy; 2024 CM FASHION. Tất cả quyền được bảo lưu.</p>"
                + "        </div>"
                + "    </div>"
                + "</body>"
                + "</html>";


        sendEmail(to, subject, content);
    }

    private void sendEmail(String to, String subject, String content) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(content, true);
        mailSender.send(message);
    }
}
