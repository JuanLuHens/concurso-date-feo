"use client"

import { useState, useMemo } from "react"

export default function TerribleDatePicker() {
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Generate all dates from 1900-01-01 to 2025-11-01
  const allDates = useMemo(() => {
    const dates: string[] = []
    const startDate = new Date(1900, 0, 1)
    const endDate = new Date(2025, 10, 1)

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const month = String(d.getMonth() + 1).padStart(2, "0")
      const year = d.getFullYear()
      const day = String(d.getDate()).padStart(2, "0")
      // Format: month/year/day (intentionally wrong)
      dates.push(`${month}/${year}/${day}`)
    }

    // Shuffle the array to make it completely disordered
    for (let i = dates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[dates[i], dates[j]] = [dates[j], dates[i]]
    }

    return dates
  }, [])

  return (
    <div
      style={{
        background: "linear-gradient(45deg, #ff00ff, #00ff00, #ffff00, #ff0000)",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Comic Sans MS, cursive",
      }}
    >
      <h1
        style={{
          fontSize: "73px",
          color: "#ff00ff",
          textShadow: "5px 5px #00ff00, 10px 10px #ff0000",
          transform: "rotate(-5deg)",
          marginLeft: "200px",
          fontFamily: "Impact, fantasy",
          letterSpacing: "15px",
        }}
      >
        📅 SELECCIONA LA FECHA DE TU NACIMIENTO 📅
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <p
          style={{
            fontSize: "28px",
            color: "#0000ff",
            backgroundColor: "#ffff00",
            padding: "10px",
            transform: "rotate(3deg)",
            width: "400px",
            marginLeft: "600px",
            fontFamily: "Courier New, monospace",
            border: "10px dotted #ff00ff",
          }}
        >
          Fecha seleccionada: {selectedDate || "NINGUNA"}
        </p>

        <select
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          size={30}
          style={{
            width: "300px",
            fontSize: "14px",
            backgroundColor: "#ff69b4",
            color: "#00ff00",
            border: "15px solid #0000ff",
            fontFamily: "Times New Roman, serif",
            padding: "20px",
            transform: "rotate(-2deg)",
            marginLeft: "100px",
            cursor: "crosshair",
          }}
        >
          <option value="">-- Elige una fecha de esta lista gigante --</option>
          {allDates.map((date, index) => (
            <option
              key={index}
              value={date}
              style={{
                backgroundColor: index % 2 === 0 ? "#ffff00" : "#00ffff",
                color: index % 3 === 0 ? "#ff0000" : "#0000ff",
              }}
            >
              {date}
            </option>
          ))}
        </select>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "80px",
            marginTop: "50px",
          }}
        >
          <button
            onClick={() => setShowConfirmation(true)}
            disabled={!selectedDate}
            style={{
              width: "250px",
              height: "80px",
              fontSize: "32px",
              backgroundColor: "#ff0000",
              color: "#ffff00",
              border: "8px dashed #00ff00",
              transform: "rotate(15deg)",
              marginLeft: "700px",
              fontFamily: "Papyrus, fantasy",
              cursor: "pointer",
              boxShadow: "20px 20px 0px #ff00ff",
            }}
          >
            ACEPTAR
          </button>

          <button
            onClick={() => setSelectedDate("")}
            style={{
              width: "120px",
              height: "120px",
              fontSize: "18px",
              backgroundColor: "#00ff00",
              color: "#ff00ff",
              border: "20px solid #ffff00",
              transform: "rotate(-25deg)",
              marginLeft: "50px",
              fontFamily: "Brush Script MT, cursive",
              cursor: "not-allowed",
              borderRadius: "50%",
            }}
          >
            Cancelar
          </button>

          <button
            onClick={() => window.location.reload()}
            style={{
              width: "400px",
              height: "40px",
              fontSize: "10px",
              backgroundColor: "#0000ff",
              color: "#ff0000",
              border: "3px dotted #00ff00",
              transform: "rotate(8deg)",
              marginLeft: "400px",
              fontFamily: "Courier New, monospace",
              cursor: "help",
              letterSpacing: "10px",
            }}
          >
            R E I N I C I A R
          </button>

          <button
            onClick={() => alert("Este botón no hace nada, saludos a MV")}
            style={{
              width: "180px",
              height: "200px",
              fontSize: "45px",
              backgroundColor: "#ffff00",
              color: "#0000ff",
              border: "25px ridge #ff00ff",
              transform: "rotate(-10deg)",
              marginLeft: "200px",
              fontFamily: "Impact, fantasy",
              cursor: "wait",
              marginTop: "-100px",
            }}
          >
            ???
          </button>
        </div>
      </div>

      {showConfirmation && (
        <div
          style={{
            position: "fixed",
            top: "30%",
            left: "20%",
            backgroundColor: "#00ffff",
            border: "30px double #ff0000",
            padding: "50px",
            transform: "rotate(5deg)",
            boxShadow: "0 0 100px #ff00ff",
            zIndex: 1000,
          }}
        >
          <h2
            style={{
              fontSize: "50px",
              color: "#ff00ff",
              fontFamily: "Comic Sans MS, cursive",
              textDecoration: "underline wavy #00ff00",
            }}
          >
            ¿ESTÁS SEGURO?
          </h2>
          <p
            style={{
              fontSize: "25px",
              color: "#0000ff",
              backgroundColor: "#ffff00",
              padding: "20px",
              fontFamily: "Courier New, monospace",
            }}
          >
            Has seleccionado: {selectedDate}
          </p>
          <div style={{ display: "flex", gap: "100px", marginTop: "30px" }}>
            <button
              onClick={() => {
                alert(`Fecha confirmada: ${selectedDate}`)
                setShowConfirmation(false)
              }}
              style={{
                width: "100px",
                height: "150px",
                fontSize: "20px",
                backgroundColor: "#ff00ff",
                color: "#ffff00",
                border: "10px solid #00ff00",
                transform: "rotate(-20deg)",
                cursor: "pointer",
                fontFamily: "Impact, fantasy",
              }}
            >
              SÍ
            </button>
            <button
              onClick={() => setShowConfirmation(false)}
              style={{
                width: "200px",
                height: "60px",
                fontSize: "35px",
                backgroundColor: "#00ff00",
                color: "#ff0000",
                border: "5px dashed #0000ff",
                transform: "rotate(12deg)",
                cursor: "pointer",
                fontFamily: "Papyrus, fantasy",
                marginTop: "50px",
              }}
            >
              NO
            </button>
          </div>
        </div>
      )}

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          fontSize: "12px",
          color: "#ff0000",
          backgroundColor: "#00ff00",
          padding: "10px",
          transform: "rotate(45deg)",
          fontFamily: "Times New Roman, serif",
          border: "5px solid #ff00ff",
        }}
      >
        Total de fechas: {allDates.length}
      </div>
    </div>
  )
}
