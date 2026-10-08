window.SEED = {
  "trialsUsed": "302",
  "trialsCap": "328",
  "capital": "Sin definir",
  "rows": [
    {
      "id": "f0-mr",
      "book": "quant",
      "name": "Mean-reversion al VWAP",
      "family": "Fase 0",
      "asOf": "2026-10-03",
      "verdict": "no",
      "metric": "Sin edge bruto. Pierde en el holdout.",
      "note": "Parte de los 298 trials del 3/10. La auditoría: VWAP-MR no pasa."
    },
    {
      "id": "f0-orb",
      "book": "quant",
      "name": "ORB de baseline, ES y MES",
      "family": "Fase 0",
      "asOf": "2026-10-03",
      "verdict": "no",
      "metric": "Pierde in-sample.",
      "note": "192 trials de baseline entre MR al VWAP y ORB de 5 minutos."
    },
    {
      "id": "f0-orb60",
      "book": "quant",
      "name": "ORB60 en NQ y MNQ",
      "family": "Fase 0",
      "asOf": "2026-10-03",
      "verdict": "no",
      "metric": "El menos malo. Depende de 2018 y 2021.",
      "note": "DSR muy lejos de 0,95. No es un pase."
    },
    {
      "id": "f0-trend",
      "book": "quant",
      "name": "Filtros de tendencia",
      "family": "Fase 0",
      "asOf": "2026-10-03",
      "verdict": "no",
      "metric": "42 trials. Ningún edge robusto.",
      "note": "Junto con momentum, macro y timeframes cierran la fase 0."
    },
    {
      "id": "f0-mom",
      "book": "quant",
      "name": "Momentum intradiario",
      "family": "Fase 0",
      "asOf": "2026-10-03",
      "verdict": "no",
      "metric": "20 trials. Sin edge.",
      "note": ""
    },
    {
      "id": "f0-macro",
      "book": "quant",
      "name": "Eventos macro",
      "family": "Fase 0",
      "asOf": "2026-10-03",
      "verdict": "no",
      "metric": "14 trials. Sin edge intradiario.",
      "note": "FOMC quedó aparte, solo como idea de forward. Todavía sin codear."
    },
    {
      "id": "f0-tf",
      "book": "quant",
      "name": "Timeframes",
      "family": "Fase 0",
      "asOf": "2026-10-03",
      "verdict": "no",
      "metric": "30 trials. Sin edge.",
      "note": ""
    },
    {
      "id": "f0-combo",
      "book": "quant",
      "name": "COMBO",
      "family": "Fase 0",
      "asOf": "2026-10-04",
      "verdict": "no",
      "metric": "No pasa.",
      "note": "La auditoría lo reprodujo. El bug de COMBO intrabar no cambió la conclusión."
    },
    {
      "id": "audit-01",
      "book": "quant",
      "name": "Reproducción independiente, fase 0/1",
      "family": "Auditoría",
      "asOf": "2026-10-04",
      "verdict": "pasa",
      "metric": "18/18 archivos y 96/96 trades, byte a byte.",
      "note": "Pasa la reproducción, no un edge. Cero trials nuevos."
    },
    {
      "id": "o1-nq",
      "book": "quant",
      "name": "O1-NQ",
      "family": "Fase 2",
      "asOf": "2026-10-04",
      "verdict": "no",
      "metric": "Valid −63,9 USD/trade, Sharpe −0,45. Train negativo.",
      "note": "ORB60 de dos lados con el rango de apertura en el tercil bajo del ATR14. CSV: Valid −20.707 USD, Sharpe −0,45."
    },
    {
      "id": "o1-es",
      "book": "quant",
      "name": "O1-ES",
      "family": "Fase 2",
      "asOf": "2026-10-04",
      "verdict": "no",
      "metric": "Valid +9,6 USD/trade, Sharpe 0,11. Train negativo.",
      "note": "El Sharpe de Valid sale de 2020–21. CSV: Valid +3.148 USD."
    },
    {
      "id": "o2-nq",
      "book": "quant",
      "name": "O2-NQ",
      "family": "Fase 2",
      "asOf": "2026-10-04",
      "verdict": "no",
      "metric": "Valid +213,2 USD/trade, Sharpe 1,11. DSR 0,213.",
      "note": "Train plano, Sharpe 0,06. La ganancia está en longs y alta volatilidad. CSV: Valid +55.636 USD. No se arma la variante solo-long."
    },
    {
      "id": "o2-es",
      "book": "quant",
      "name": "O2-ES",
      "family": "Fase 2",
      "asOf": "2026-10-04",
      "verdict": "no",
      "metric": "Valid +98,1 USD/trade, Sharpe 0,89. DSR 0,013.",
      "note": "Train en contra, Sharpe −0,63. CSV: Valid +28.451 USD."
    },
    {
      "id": "audit-2",
      "book": "quant",
      "name": "Reproducción independiente, fase 2",
      "family": "Auditoría",
      "asOf": "2026-10-04",
      "verdict": "pasa",
      "metric": "84/84 archivos, byte-idéntico. Los cuatro siguen en no pasa.",
      "note": "Otra vez: pasa el control, no la estrategia."
    },
    {
      "id": "rollfix",
      "book": "quant",
      "name": "Rollfix y gap strict",
      "family": "Corrección",
      "asOf": "2026-10-04",
      "verdict": "no",
      "metric": "Los cuatro siguen en no pasa. Cero trades distintos.",
      "note": "No suma a N. El gap strict nunca cruzó el umbral de O2. Lo más cerca: 0,84 pts en NQ."
    },
    {
      "id": "wf-mr-es",
      "book": "quant",
      "name": "Walk-forward MR en ES",
      "family": "Walk-forward",
      "asOf": "2026-10-04",
      "verdict": "no",
      "metric": "OOS 2013–2021: −8.392 USD, Sharpe −0,43.",
      "note": "Drawdown cerrado −9.317 USD. Racha de 1.649 días."
    },
    {
      "id": "wf-mr-nq",
      "book": "quant",
      "name": "Walk-forward MR en NQ",
      "family": "Walk-forward",
      "asOf": "2026-10-04",
      "verdict": "no",
      "metric": "OOS +10.685 USD, Sharpe 0,24. No alcanza.",
      "note": "Drawdown cerrado −13.536 USD. El signo positivo no es un pase."
    },
    {
      "id": "wf-orb-es",
      "book": "quant",
      "name": "Walk-forward ORB en ES",
      "family": "Walk-forward",
      "asOf": "2026-10-04",
      "verdict": "no",
      "metric": "OOS −81.130 USD, Sharpe −0,85.",
      "note": "El peor de los cuatro walk-forward."
    },
    {
      "id": "wf-orb-nq",
      "book": "quant",
      "name": "Walk-forward ORB en NQ",
      "family": "Walk-forward",
      "asOf": "2026-10-04",
      "verdict": "no",
      "metric": "OOS +20.127 USD, Sharpe 0,14. No alcanza.",
      "note": "Drawdown cerrado −49.663 USD."
    },
    {
      "id": "h-mr-es",
      "book": "quant",
      "name": "Elegido MR en ES",
      "family": "Holdout ya usado",
      "asOf": "2026-10-04",
      "verdict": "no",
      "metric": "IS Sharpe −0,36. OOS Sharpe −0,32.",
      "note": "Params k3.0, s1.5, t60, 1 tick. IS −8.451 USD (344 trades). OOS −8.444 USD (158)."
    },
    {
      "id": "h-orb-es",
      "book": "quant",
      "name": "Elegido ORB60 en ES",
      "family": "Holdout ya usado",
      "asOf": "2026-10-04",
      "verdict": "no",
      "metric": "IS Sharpe −0,79. OOS Sharpe +0,12.",
      "note": "or60. IS −94.795 USD. OOS +14.442 USD no compensa el in-sample ni el DSR."
    },
    {
      "id": "h-combo-es",
      "book": "quant",
      "name": "Elegido COMBO en ES",
      "family": "Holdout ya usado",
      "asOf": "2026-10-04",
      "verdict": "no",
      "metric": "IS Sharpe −0,87. OOS Sharpe +0,05.",
      "note": "50/50. IS −51.623 USD. OOS +2.998 USD."
    },
    {
      "id": "h-mr-nq",
      "book": "quant",
      "name": "Elegido MR en NQ",
      "family": "Holdout ya usado",
      "asOf": "2026-10-04",
      "verdict": "no",
      "metric": "IS Sharpe +0,14. OOS Sharpe −0,58.",
      "note": "El holdout da vuelta el signo. OOS −20.757 USD."
    },
    {
      "id": "h-orb-nq",
      "book": "quant",
      "name": "Elegido ORB60 en NQ",
      "family": "Holdout ya usado",
      "asOf": "2026-10-04",
      "verdict": "no",
      "metric": "IS Sharpe +0,16. OOS Sharpe +0,64.",
      "note": "OOS +135.570 USD se ve bien y igual no pasa: régimen 2018/2021 y DSR lejos de 0,95. El holdout ya se gastó."
    },
    {
      "id": "h-combo-nq",
      "book": "quant",
      "name": "Elegido COMBO en NQ",
      "family": "Holdout ya usado",
      "asOf": "2026-10-04",
      "verdict": "no",
      "metric": "IS Sharpe +0,19. OOS Sharpe +0,55.",
      "note": "Hereda el ORB de NQ. No es un pase."
    },
    {
      "id": "fwd-o2",
      "book": "quant",
      "name": "Forward de O2",
      "family": "Forward",
      "asOf": "2026-10-05",
      "verdict": "forward",
      "metric": "Congelado, sin plata. Próxima bajada: lunes 12/10, ~0,10 USD.",
      "note": "Databento .v.0, 08:47 ART. Un veredicto con ~65 trades por año tarda cerca de un año y medio. O1 no se monitorea. Anotá acá si el lunes falló."
    },
    {
      "id": "fomc",
      "book": "quant",
      "name": "F-ES y F-NQ (FOMC)",
      "family": "Forward",
      "asOf": "2026-10-07",
      "verdict": "pendiente",
      "metric": "Sin codear. Calendario oficial de la Fed, ~8 eventos por año.",
      "note": "Comprar 16:00 ET del día hábil previo y vender 14:00 ET del día del anuncio. Hay que congelarlo antes del próximo anuncio."
    },
    {
      "id": "fase3",
      "book": "quant",
      "name": "Fase 3, tendencia más carry",
      "family": "Fase 3",
      "asOf": "2026-10-07",
      "verdict": "pendiente",
      "metric": "Trials de futuros escritos. No se corrió ninguno.",
      "note": "Pre-registro v2.2, sha 79b893be. Futuros full-size, F1 a F8, con F3 como principal. Falta el OK a Databento, opción C, 3,65 USD, y la auditoría independiente al sello del holdout."
    }
  ]
};
