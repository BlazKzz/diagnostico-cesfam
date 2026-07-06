export const CASES = [
  // ---------------- CASO 0 ----------------
  {
    id: 0,
    image: "imagenes/paciente_cortededo.png",
    patientText: "Doctor, me corté el dedo mientras cocinaba. Lo lavé y me puse una venda, pero quería saber si necesito antibióticos.",
    fichaItems: [
      "Corte pequeño en un dedo.",
      "Herida limpia.",
      "Sin pus.",
      "Sin fiebre.",
      "Sin inflamación importante."
    ],
    initialSalud: 70,
    maxSalud: 80,
    learning: "Las heridas limpias y sin signos de infección no requieren antibióticos: basta con observación y buenos cuidados.",
    options: [
      {
        id: "A",
        label: "Recetar antibióticos inmediatamente.",
        doctorLine: "Le recetaré un antibiótico para evitar cualquier posible infección.",
        patientLine: "Muchas gracias, doctor(a).",
        resultLines: [
          "El antibiótico era innecesario.",
          "No existían signos de infección bacteriana.",
          "Aumenta ligeramente la resistencia bacteriana."
        ],
        effects: { salud: -10, resistencia: 10 },
        correct: false
      },
      {
        id: "B",
        label: "Limpiar la herida y recomendar observación.",
        doctorLine: "La herida se ve limpia y no presenta signos de infección. Manténgala limpia y cubierta. Si nota pus, fiebre o inflamación importante, vuelva a consultar.",
        patientLine: "Entendido, doctor(a). Muchas gracias.",
        resultLines: [
          "El paciente sigue las recomendaciones.",
          "La herida cicatriza con normalidad.",
          "No se utilizan recursos innecesarios."
        ],
        effects: { salud: 10 },
        correct: true
      },
      {
        id: "C",
        label: "Solicitar exámenes.",
        doctorLine: "Solicitaré algunos exámenes antes de tomar una decisión.",
        patientLine: "De acuerdo.",
        effects: { presupuesto: -10 },
        exam: {
          resultLines: [
            "Hemograma normal.",
            "Sin signos de infección.",
            "No se detectan alteraciones relevantes."
          ],
          followUp: [
            {
              id: "A",
              label: "Recetar antibióticos.",
              doctorLine: "Aun con los exámenes normales, le recetaré un antibiótico por precaución.",
              resultLines: ["Uso innecesario de antibióticos."],
              effects: { salud: -10, resistencia: 10 },
              correct: false
            },
            {
              id: "B",
              label: "Recomendar observación y cuidados básicos.",
              doctorLine: "Los exámenes confirman que no hay infección. Mantenga la herida limpia y cubierta.",
              resultLines: ["Manejo adecuado.", "Se gastaron recursos en un examen que no era estrictamente necesario."],
              effects: { salud: 10 },
              correct: true
            }
          ]
        }
      }
    ]
  },

  // ---------------- CASO 1 ----------------
  {
    id: 1,
    image: "imagenes/paciente_resfriado.png",
    patientText: "Doctor, llevo tres días con congestión nasal, dolor de garganta y algo de tos. Necesito antibióticos porque debo volver al trabajo.",
    fichaItems: [
      "Temperatura: 37,2 °C.",
      "Garganta enrojecida, sin placas blancas.",
      "Sin pus.",
      "Tos leve."
    ],
    initialSalud: 55,
    maxSalud: 80,
    learning: "Los antibióticos no sirven contra infecciones virales como el resfriado común.",
    options: [
      {
        id: "A",
        label: "Recetar antibióticos.",
        doctorLine: "Le recetaré un antibiótico para que se recupere más rápido.",
        patientLine: "Gracias, doctor(a).",
        resultLines: [
          "El cuadro es viral, no bacteriano.",
          "El antibiótico no acelera esta recuperación.",
          "Aumenta la resistencia bacteriana."
        ],
        effects: { salud: -10, resistencia: 10 },
        correct: false
      },
      {
        id: "B",
        label: "Recomendar reposo y líquidos.",
        doctorLine: "Esto es un cuadro viral típico. Le recomiendo reposo, líquidos abundantes y paracetamol si tiene molestias. Los antibióticos no ayudan en este caso.",
        patientLine: "Entendido, doctor(a).",
        resultLines: [
          "Manejo adecuado de una infección viral.",
          "No se utilizan antibióticos innecesarios."
        ],
        effects: { salud: 10 },
        correct: true
      },
      {
        id: "C",
        label: "Solicitar exámenes.",
        doctorLine: "Solicitaré algunos exámenes antes de tomar una decisión.",
        patientLine: "De acuerdo.",
        effects: { presupuesto: -10 },
        exam: {
          resultLines: [
            "Hemograma normal.",
            "Sin signos de infección bacteriana.",
            "Cuadro compatible con origen viral."
          ],
          followUp: [
            {
              id: "A",
              label: "Recetar antibióticos.",
              doctorLine: "Aun así, le recetaré un antibiótico para mayor seguridad.",
              resultLines: ["Uso innecesario de antibióticos confirmado por los exámenes."],
              effects: { salud: -10, resistencia: 10 },
              correct: false
            },
            {
              id: "B",
              label: "Recomendar reposo, líquidos y observación.",
              doctorLine: "Los exámenes descartan infección bacteriana. Reposo, líquidos y observación serán suficientes.",
              resultLines: ["Manejo adecuado.", "Se gastaron recursos en un examen que confirmó lo esperado."],
              effects: { salud: 10 },
              correct: true
            }
          ]
        }
      }
    ]
  },

  // ---------CASO 2-----------------
  {
    id: 2,
    image:"imagenes/paciente_pediatrico.png",
    patientText: "Doctor, traje a mi hijo que lleva varios días sintiéndose muy mal. Le duele mucho la garganta, casi no puede comer y anoche casi no durmió por la fiebre.",
    fichaItems:[ 
      "Edad: 8 años.",
      "Temperatura: 39,2 °C.",
      "Dolor intenso de garganta.",
      "Dificultad para tragar.",
      "Ganglios inflamados en el cuello.",
      "Placas blancas visibles en las amígdalas.",
      "Sin tos.",
      "Sin congestión nasal."
    ],
    initialSalud: 45,
    maxSalud: 80,
    learning: "Algunas infecciones bacterianas requieren tratamiento antibiótico oportuno.",
    options: [
      {
        id: "A",
        label: "Recomendar reposo e hidratación.",
        doctorLine: "Por ahora recomiendo reposo, líquidos y observación.",
        patientLine: "Doctor(a), pero mi hijo se siente cada vez peor.",
        resultLines: [
          "La infección bacteriana no fue tratada.",
          "El paciente empeora."
        ],
        effects: { salud: -10 },
        correct: false
      },
      {
        id: "B",
        label: "Solicitar examen complementario.",
        doctorLine: "Solicitaré un examen para confirmar el origen de la infección.",
        patientLine: "De acuerdo.",
        effects: { presupuesto: -10 },
        exam: {
          resultLines: [
            "Examen compatible con infección bacteriana.",
            "Los síntomas coinciden con faringitis bacteriana."
          ],
          followUp: [
            {
              id: "A",
              label: "Recetar antibióticos.",
              doctorLine: "El examen confirma una infección bacteriana. Indicaré antibióticos y debe completar todo el tratamiento.",
              resultLines: [
                "Manejo adecuado.",
                "Se usaron recursos adicionales para confirmar el diagnóstico."
              ],
              effects: { salud: 10 },
              correct: true
            },
            {
              id: "B",
              label: "Recomendar solo reposo, líquidos y observación.",
              doctorLine: "Aunque el examen indica infección bacteriana, recomiendo solo reposo.",
              resultLines: [
                "La infección bacteriana no fue tratada.",
                "El paciente empeora."
              ],
              effects: { salud: -10 },
              correct: false
            }
          ]
        }
      },
      {
        id: "C",
        label: "Diagnosticar probable faringitis bacteriana y prescribir antibiótico.",
        doctorLine: "Sus síntomas son compatibles con una infección bacteriana de la garganta. Le indicaré un tratamiento antibiótico y es muy importante completar todos los días indicados.",
        patientLine: "Entendido, doctor(a). Seguiré las indicaciones.",
        resultLines: [
          "El paciente recibe tratamiento oportuno.",
          "Se previenen complicaciones."
        ],
        effects: { salud: 10 },
        correct: true
      }
    ]
  },

  // ---------CASO 3-----------------
  {
    id: 3,
    image: "imagenes/paciente_alcohol.png",
    patientText: "Ayer tomé cerveza mientras seguía el tratamiento",
    fichaItems: [
      "Edad: 34 años.",
      "Segundo día de tratamiento antibiótico.",
      "No presenta síntomas nuevos.",
      "Desea saber si debe modificar el tratamiento."
    ],
    initialSalud: 60,
    maxSalud: 80,
    learning: "Algunas combinaciones pueden aumentar efectos adversos o disminuir la adherencia al tratamiento.",
    options: [
      {
        id: "A",
        label: "Explicar que algunos antibióticos pueden interactuar con el alcohol.",
        doctorLine: "Algunos antibióticos pueden interactuar con el alcohol y aumentar efectos adversos como náuseas, vómitos, mareos o dolor de cabeza. Es recomendable evitar alcohol hasta finalizar el tratamiento.",
        patientLine: "Entendido, doctor(a). No volveré a beber mientras esté en tratamiento.",
        resultLines: [
          "El paciente recibe educación adecuada.",
          "Se favorece el uso responsable del medicamento."
        ],
        effects: { salud: 10 },
        correct: true
      },
      {
        id: "B",
        label: "Decir que no importa.",
        doctorLine: "No importa, puede seguir bebiendo alcohol durante el tratamiento.",
        resultLines: [
          "El paciente recibe una indicación irresponsable.",
          "Aumenta el riesgo de efectos adversos."
        ],
        effects: { salud: -10, reputacion: -5 },
        correct: false
      },
      {
        id: "C",
        label: "Indicar que duplique la dosis.",
        doctorLine: "Como consumió alcohol durante el tratamiento, tome una dosis doble para compensar.",
        resultLines: [
          "La indicación es peligrosa.",
          "Puede aumentar el riesgo de efectos adversos."
        ],
        effects: { salud: -10, reputacion: -5 },
        correct: false
      }
    ]
  },

  // ---------CASO 4-----------------
  {
    id: 4,
    image: "imagenes/paciente_nauseas.png",
    patientText: "Tomé el antibiótico, pero me dio náuseas y vómitos.",
    fichaItems: [
      "Segundo día de tratamiento.",
      "No presenta alergias conocidas.",
      "No ha suspendido el medicamento.",
      "Refiere malestar estomacal."
    ],
    initialSalud: 55,
    maxSalud: 80,
    learning: "Seguir correctamente las instrucciones reduce efectos adversos y mejora la adherencia al tratamiento.",
    options: [
      {
        id: "A",
        label: "Hacer más preguntas para indagar.",
        doctorLine: "Necesito hacerle algunas preguntas. ¿Cómo está tomando el medicamento?",
        patientLine: "Lo he estado tomando con el estómago vacío porque salgo temprano y no alcanzo a desayunar.",
        resultLines: [
          "El médico identifica una posible causa del malestar.",
          "Se educa al paciente para tomar el medicamento según indicación."
        ],
        effects: { salud: 10 },
        correct: true
      },
      {
        id: "B",
        label: "Abandonar inmediatamente el tratamiento.",
        doctorLine: "Suspenda inmediatamente el tratamiento.",
        resultLines: [
          "Se suspende el tratamiento sin evaluación suficiente.",
          "Aumenta el riesgo de resistencia bacteriana."
        ],
        effects: { salud: -10, resistencia: 10 },
        correct: false
      },
      {
        id: "C",
        label: "Indicarle que continúe igual, sin hacer más preguntas.",
        doctorLine: "Siga tomando el medicamento exactamente igual.",
        resultLines: [
          "No se investigó la causa del malestar.",
          "El paciente podría abandonar el tratamiento por su cuenta."
        ],
        effects: { salud: -10 },
        correct: false
      }
    ]
  },

  // ---------CASO 5-----------------
  {
    id: 5,
    image: "imagenes/paciente_abandona_tratamiento.png",
    patientText: "Doctor, me sentí mejor al tercer día y dejé de tomar el antibiótico.",
    fichaItems: [
      "Tratamiento indicado por 7 días.",
      "Suspendió el medicamento al tercer día.",
      "Actualmente no presenta síntomas.",
      "No consultó antes de suspender."
    ],
    initialSalud: 60,
    maxSalud: 80,
    learning: "Suspender el tratamiento antes de tiempo favorece la resistencia bacteriana.",
    options: [
      {
        id: "A",
        label: "Felicitar al paciente.",
        doctorLine: "Excelente decisión. Si se siente bien, no es necesario continuar.",
        resultLines: [
          "Se refuerza una conducta incorrecta.",
          "Aumenta el riesgo de resistencia bacteriana."
        ],
        effects: { salud: -10, resistencia: 10, reputacion: -5 },
        correct: false
      },
      {
        id: "B",
        label: "Explicar la importancia de completar el tratamiento.",
        doctorLine: "Aunque los síntomas desaparezcan, debe completar el tratamiento según la indicación médica. Suspender antes de tiempo puede favorecer que algunas bacterias sobrevivan.",
        patientLine: "Entiendo. No sabía que eso podía pasar.",
        resultLines: [
          "El paciente recibe educación adecuada.",
          "Se favorece el uso correcto del antibiótico."
        ],
        effects: { salud: 10 },
        correct: true
      },
      {
        id: "C",
        label: "Indicar que tome la mitad de la dosis.",
        doctorLine: "Entonces tome solamente la mitad de las dosis que le quedan.",
        resultLines: [
          "La dosis indicada es incorrecta.",
          "Aumenta el riesgo de resistencia bacteriana."
        ],
        effects: { salud: -10, resistencia: 10, reputacion: -5 },
        correct: false
      }
    ]
  },

  // ---------CASO 6-----------------
  {
    id: 6,
    image: "imagenes/paciente_automedicacion.png",
    patientText: "Me empezó a doler el estómago y encontré unas pastillas de amoxicilina que me sobraron de un tratamiento dental. ¿Me las puedo tomar?",
    fichaItems: [
      "Dolor abdominal leve.",
      "Sin fiebre.",
      "Sin signos de infección bacteriana.",
      "Ruidos intestinales normales.",
      "Medicamento sobrante de hace un año."
    ],
    initialSalud: 60,
    maxSalud: 80,
    learning: "Automedicarse y usar antibióticos sobrantes aumenta la resistencia bacteriana.",
    options: [
      {
        id: "A",
        label: "Autorizar el uso de antibióticos sobrantes.",
        doctorLine: "Puede tomarlas, siempre es bueno aprovechar medicamentos que ya tiene en casa.",
        resultLines: [
          "Se fomenta la automedicación.",
          "El antibiótico puede ser inadecuado o estar vencido."
        ],
        effects: { salud: -10, resistencia: 10, reputacion: -5 },
        correct: false
      },
      {
        id: "B",
        label: "Explicar los riesgos y recomendar manejo de síntomas.",
        doctorLine: "No debe tomar antibióticos sobrantes. Automedicarse puede ser peligroso y los antibióticos no sirven para dolores de estómago comunes.",
        patientLine: "Comprendo, no los tomaré.",
        resultLines: [
          "El paciente evita un error común.",
          "Se promueve el uso racional de medicamentos."
        ],
        effects: { salud: 10 },
        correct: true
      },
      {
        id: "C",
        label: "Recetar un antibiótico nuevo.",
        doctorLine: "Mejor no tome esos. Le recetaré antibióticos nuevos para el dolor de estómago.",
        resultLines: [
          "El antibiótico era innecesario.",
          "No hay signos de infección bacteriana."
        ],
        effects: { salud: -10, resistencia: 10 },
        correct: false
      }
    ]
  },

  // ---------CASO 7-----------------
  {
    id: 7,
    image: "imagenes/paciente_malestarestomacal.png",
    patientText: "Llevo dos días con diarrea y náuseas. Un vecino me dijo que pidiera antibióticos para cortar la infección estomacal.",
    fichaItems: [
      "Temperatura: 37,4 °C.",
      "Deposiciones líquidas sin sangre.",
      "Sin pus en las heces.",
      "Cuadro compatible con origen viral o alimentario leve."
    ],
    initialSalud: 50,
    maxSalud: 80,
    learning: "Los antibióticos no son efectivos contra virus estomacales y pueden alterar la flora intestinal sana.",
    options: [
      {
        id: "A",
        label: "Recetar antibióticos para frenar la diarrea.",
        doctorLine: "Le daré un antibiótico fuerte para limpiar su estómago y frenar la diarrea.",
        resultLines: [
          "Uso innecesario de antibióticos.",
          "El antibiótico podría empeorar la flora intestinal."
        ],
        effects: { salud: -10, resistencia: 10 },
        correct: false
      },
      {
        id: "B",
        label: "Solicitar exámenes de sangre y heces.",
        doctorLine: "Solicitaré exámenes antes de tomar una decisión.",
        effects: { presupuesto: -10 },
        exam: {
          resultLines: [
            "Sin presencia de bacterias patógenas.",
            "Infección viral confirmada."
          ],
          followUp: [
            {
              id: "A",
              label: "Recetar antibióticos.",
              doctorLine: "Aun así, indicaré antibióticos.",
              resultLines: [
                "Uso innecesario de antibióticos."
              ],
              effects: { salud: -10, resistencia: 10 },
              correct: false
            },
            {
              id: "B",
              label: "Recomendar hidratación oral y dieta blanda.",
              doctorLine: "Los exámenes confirman que no necesita antibióticos. Mantenga hidratación y dieta liviana.",
              resultLines: [
                "Manejo adecuado.",
                "Se usaron recursos adicionales para confirmar el diagnóstico."
              ],
              effects: { salud: 10 },
              correct: true
            }
          ]
        }
      },
      {
        id: "C",
        label: "Recomendar hidratación oral y dieta blanda.",
        doctorLine: "La mayoría de estos cuadros son virales o alimentarios leves. Los antibióticos no le ayudarán. Lo más importante es mantenerse hidratado.",
        patientLine: "Entendido, beberé líquidos y comeré liviano.",
        resultLines: [
          "Manejo adecuado del cuadro viral.",
          "No se usan antibióticos innecesarios."
        ],
        effects: { salud: 10 },
        correct: true
      }
    ]
  },

  // ---------CASO 8-----------------
  {
    id: 8,
    image: "imagenes/paciente_olvidadizo.png",
    patientText: "Ayer olvidé tomar mi pastilla del antibiótico. ¿Me tomo dos juntas ahora para compensar?",
    fichaItems: [
      "Cuarto día de tratamiento de 7 días.",
      "Infección original controlada.",
      "Indicación médica: 1 pastilla cada 12 horas.",
      "Sin síntomas de empeoramiento."
    ],
    initialSalud: 60,
    maxSalud: 80,
    learning: "Tomar dosis dobles para compensar un olvido aumenta el riesgo de efectos adversos.",
    options: [
      {
        id: "A",
        label: "Indicar que tome doble dosis ahora.",
        doctorLine: "Sí, tome dos pastillas juntas ahora para recuperar el nivel del medicamento.",
        resultLines: [
          "Existe riesgo de toxicidad o efectos adversos por sobredosis."
        ],
        effects: { salud: -10, reputacion: -5 },
        correct: false
      },
      {
        id: "B",
        label: "Suspender el tratamiento.",
        doctorLine: "Como ya se saltó una dosis, suspenda las pastillas.",
        resultLines: [
          "Suspensión prematura del tratamiento.",
          "Aumenta el riesgo de resistencia bacteriana."
        ],
        effects: { salud: -10, resistencia: 10 },
        correct: false
      },
      {
        id: "C",
        label: "Tomar solo la dosis correspondiente y continuar horario normal.",
        doctorLine: "No tome dos dosis juntas. Tome la dosis correspondiente ahora y continúe con su horario habitual hasta terminar el tratamiento.",
        patientLine: "De acuerdo, pondré una alarma para no olvidarlo.",
        resultLines: [
          "El paciente retoma correctamente el tratamiento.",
          "Se evita el riesgo de sobredosis."
        ],
        effects: { salud: 10 },
        correct: true
      }
    ]
  },

  // ---------CASO 9-----------------
  {
    id: 9,
    image: "imagenes/paciente_picadura.png",
    patientText: "Ayer fui al campo y me picó un insecto. Está rojo y me pica mucho. Vengo por una crema con antibióticos.",
    fichaItems: [
      "Enrojecimiento leve alrededor de la picadura.",
      "Sin pus.",
      "Sin aumento de temperatura local.",
      "Picazón intensa.",
      "Sin fiebre."
    ],
    initialSalud: 65,
    maxSalud: 80,
    learning: "Las reacciones alérgicas o inflamatorias locales no requieren antibióticos salvo que existan signos claros de infección.",
    options: [
      {
        id: "A",
        label: "Recetar pomada antibiótica por precaución.",
        doctorLine: "Le recetaré una crema con antibiótico para prevenir cualquier cosa.",
        resultLines: [
          "Uso innecesario de antibióticos tópicos.",
          "No existían signos de infección bacteriana."
        ],
        effects: { salud: -10, resistencia: 10 },
        correct: false
      },
      {
        id: "B",
        label: "Recomendar crema para la picazón y explicar signos de alarma.",
        doctorLine: "Parece una reacción normal a la picadura. Los antibióticos no le quitarán la picazón. Vuelva si aparece pus, fiebre o calor intenso en la zona.",
        resultLines: [
          "Manejo adecuado.",
          "No se utilizan antibióticos innecesarios."
        ],
        effects: { salud: 10 },
        correct: true
      },
      {
        id: "C",
        label: "Solicitar exámenes.",
        doctorLine: "Solicitaré un hemograma y un cultivo de la zona.",
        effects: { presupuesto: -10 },
        exam: {
          resultLines: [
            "Sin signos de infección.",
            "Hallazgos compatibles con reacción local."
          ],
          followUp: [
            {
              id: "A",
              label: "Recetar antibióticos tópicos.",
              doctorLine: "Aun así indicaré antibiótico tópico.",
              resultLines: [
                "Uso innecesario de antibióticos."
              ],
              effects: { salud: -10, resistencia: 10 },
              correct: false
            },
            {
              id: "B",
              label: "Recomendar crema para picazón.",
              doctorLine: "Los exámenes no muestran infección. Use tratamiento para la picazón y observe signos de alarma.",
              resultLines: [
                "Manejo adecuado.",
                "Se usaron recursos adicionales."
              ],
              effects: { salud: 10 },
              correct: true
            }
          ]
        }
      }
    ]
  },

  // ---------CASO 10-----------------
  {
    id: 10,
    image: "imagenes/paciente_repitetratamiento.png",
    patientText: "A mi hermano le recetaron antibióticos para una bronquitis. Como yo empecé con tos ayer, ¿puedo tomar los que le sobraron?",
    fichaItems: [
      "Tos seca reciente: 1 día de evolución.",
      "Sin fiebre: 36,8 °C.",
      "Garganta normal.",
      "Pulmones limpios.",
      "El hermano tuvo infección bacteriana diagnosticada."
    ],
    initialSalud: 65,
    maxSalud: 80,
    learning: "Compartir antibióticos fomenta dosis incorrectas, tratamientos incompletos y consumo innecesario.",
    options: [
      {
        id: "A",
        label: "Explicar que los medicamentos son personales y que no requiere antibióticos.",
        doctorLine: "Los antibióticos son de uso personal. Además, su tos es reciente y no presenta signos de infección bacteriana. Tomar los antibióticos de su hermano podría hacerle daño.",
        patientLine: "Entiendo, mejor me cuido con líquidos y reposo.",
        resultLines: [
          "Se previene el uso de antibióticos compartidos.",
          "Diagnóstico clínico correcto."
        ],
        effects: { salud: 10 },
        correct: true
      },
      {
        id: "B",
        label: "Autorizar que comparta la caja con su hermano.",
        doctorLine: "Está bien, si tienen síntomas parecidos pueden compartir la medicina.",
        resultLines: [
          "Se fomenta un error grave.",
          "Riesgo de tratamiento incompleto para ambos."
        ],
        effects: { salud: -10, resistencia: 10, reputacion: -10 },
        correct: false
      },
      {
        id: "C",
        label: "Recetarle una caja idéntica nueva.",
        doctorLine: "No comparta la caja de su hermano. Le recetaré una caja igual para usted.",
        resultLines: [
          "El antibiótico era innecesario.",
          "No hay signos de infección bacteriana."
        ],
        effects: { salud: -10, resistencia: 10 },
        correct: false
      }
    ]
  },
];