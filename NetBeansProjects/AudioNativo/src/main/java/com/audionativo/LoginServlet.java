package com.audionativo;

import java.io.*;
import java.sql.*;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

@WebServlet(name = "LoginServlet", urlPatterns = {"/LoginServlet"})
public class LoginServlet extends HttpServlet {

    // Este método permite a React consultar si hay una sesión activa
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        response.setHeader("Access-Control-Allow-Credentials", "true"); // Importante para sesiones
        response.setContentType("application/json");

        HttpSession session = request.getSession(false);
        String nombre = (session != null) ? (String) session.getAttribute("usuarioNombre") : null;

        PrintWriter out = response.getWriter();
        out.print("{\"nombre\":\"" + (nombre != null ? nombre : "") + "\"}");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setContentType("application/json");

        // Leer el JSON
        StringBuilder sb = new StringBuilder();
        String line;
        try (BufferedReader reader = request.getReader()) {
            while ((line = reader.readLine()) != null) sb.append(line);
        }

        String body = sb.toString();
        String correo = body.split("\"email\":\"")[1].split("\"")[0].replace("\"", "").trim();
        String password = body.split("\"password\":\"")[1].split("\"")[0].replace("\"", "").trim();

        boolean loginExitoso = false;
        String nombreUsuario = "";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/audionativo_db", "root", "carlos123");
            PreparedStatement ps = con.prepareStatement("SELECT nombre FROM usuarios WHERE email = ? AND password = ?");
            ps.setString(1, correo);
            ps.setString(2, password);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                loginExitoso = true;
                nombreUsuario = rs.getString("nombre");
                // Crear la sesión en el servidor
                HttpSession session = request.getSession();
                session.setAttribute("usuarioNombre", nombreUsuario);
            }
        } catch (Exception e) { e.printStackTrace(); }

        PrintWriter out = response.getWriter();
        out.print("{\"valido\":" + loginExitoso + "}");
    }
    @Override
protected void doOptions(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
    // Estas líneas son el "pasaporte" para que React pueda entrar
    response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setStatus(HttpServletResponse.SC_OK);
    }
}