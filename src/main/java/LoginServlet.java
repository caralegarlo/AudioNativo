// Código técnico para el procesamiento de autenticación
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // Recepción de parámetros desde el formulario HTML (Punto 2)
        String correoIngresado = request.getParameter("correo");
        String claveIngresada = request.getParameter("password");
        
        String jdbcUrl = "jdbc:mysql://localhost:3306/audionativo_db";
        String dbUser = "root";
        String dbPass = "TU_CONTRASEÑA"; // Reemplazar por tu clave de MySQL

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection(jdbcUrl, dbUser, dbPass);
            
            // Consulta SQL para validar credenciales
            String sql = "SELECT nombre FROM usuarios WHERE email = ? AND password = ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, correoIngresado);
            ps.setString(2, claveIngresada);
            
            ResultSet rs = ps.executeQuery();
            
            if (rs.next()) {
                // Inicio de sesión exitoso
                HttpSession session = request.getSession();
                session.setAttribute("usuario", rs.getString("nombre"));
                response.sendRedirect("perfil.jsp");
            } else {
                // Redirección con parámetro de error (Punto 2 - GET)
                response.sendRedirect("index.jsp?error=1");
            }
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
            response.sendRedirect("index.jsp?error=db");
        }
    }
}