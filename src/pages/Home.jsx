import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const gradientStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to bottom right, #e0f7fa, #ffffff)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontSmooth: "always",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  };

  return (
    <div style={gradientStyle} role="main">
      {/* Hero Section */}
      <div
        className="d-flex align-items-center justify-content-center flex-grow-1 p-3"
        style={{ flex: 1 }}
      >
        <div
          className="card text-center animate-fade-in"
          style={{
            maxWidth: "700px",
            width: "100%",
            backgroundColor: "#ffffff",
            borderRadius: "2rem",
            padding: "3rem",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.015)";
            e.currentTarget.style.boxShadow = "0 18px 40px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.1)";
          }}
        >
          {/* Icon */}
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📘</div>

          {/* Heading */}
          <h1
            className="fw-bold mb-3"
            style={{
              fontSize: "2.5rem",
              background: "linear-gradient(to right, #007bff, #00bfa5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Welcome to the College Portal
          </h1>

          <p className="text-muted fs-5 mb-4">
            Your one-stop academic platform. Track attendance, view grades, and stay updated.
          </p>

          {/* CTA Button */}
          <Link
            to="/login"
            className="btn btn-primary btn-lg px-5 py-2 fw-semibold shadow-sm"
            style={{
              transition: "all 0.3s ease",
              borderRadius: "50px",
              letterSpacing: "0.5px",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 8px 20px rgba(0, 123, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "none";
            }}
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#f9fafb",
          borderTop: "4px solid",
          borderImage: "linear-gradient(to right, #00bfa5, #007bff) 1",
          padding: "1.5rem 0",
          marginTop: "2rem",
        }}
      >
        <div className="container text-center">
          <p className="mb-2 fw-semibold text-muted">
            © {new Date().getFullYear()} College Portal. All rights reserved.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a
              href="#"
              className="text-muted text-decoration-none hover:text-primary transition"
              title="Twitter"
            >
              <i className="bi bi-twitter"></i>
              {console.llog("hello")}
            </a>
            <a
              href="#"
              className="text-muted text-decoration-none hover:text-primary transition"
              title="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="#"
              className="text-muted text-decoration-none hover:text-primary transition"
              title="Email"
            >
              <i className="bi bi-envelope"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

