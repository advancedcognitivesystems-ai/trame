// The sequences, as data: the dataset "Sequences" (module content) checks them. A step that moves the leg that leads
// the round says where it goes (in front, behind), and its cue says {leg} there. The plank holds the breath as long as an
// inhale, whatever the person's pattern. To be reviewed by people who practise.

import { BreathPhase } from "../product"
import { Leg, Stance } from "../body"
import type { Sequence } from "../content"

export const sequences: Sequence[] = [
  {
    id: "sun-salutation",
    name: { fr: "Salutation au soleil", en: "Sun salutation" },
    rounds: [Leg.right, Leg.left],
    steps: [
      { pose: "pranamasana", breath: BreathPhase.exhale, said: { fr: "Mains jointes devant la poitrine", en: "Palms together at the chest" }, cue: { fr: "Debout, pieds joints, mains jointes devant la poitrine.", en: "Stand with the feet together, palms joined before the chest." } },
      { pose: "hasta-uttanasana", breath: BreathPhase.inhale, said: { fr: "Bras au-dessus de la tête", en: "Arms overhead" }, cue: { fr: "Levez les bras au-dessus de la tête et étirez-vous vers l'arrière.", en: "Raise the arms overhead and stretch back." } },
      { pose: "padahastasana", breath: BreathPhase.exhale, said: { fr: "Penchez-vous, mains au sol", en: "Fold, hands down" }, cue: { fr: "Penchez-vous en avant, les mains au sol de part et d'autre des pieds.", en: "Bend forward, the hands on the floor beside the feet." } },
      { pose: "ashwa-sanchalanasana", breath: BreathPhase.inhale, leadingLeg: Stance.back, said: { fr: "Jambe {leg} en arrière, genou au sol", en: "{leg} leg back, knee down" }, cue: { fr: "Reculez la jambe {leg}, le genou au sol, et regardez vers le haut.", en: "Step the {leg} leg back, the knee down, and look up." } },
      { pose: "dandasana", breath: BreathPhase.holdTop, breathing: { ratio: { inhale: 1, holdTop: 1, exhale: 1, holdBottom: 0 } }, said: { fr: "L'autre jambe en arrière", en: "Other leg back" }, cue: { fr: "Reculez l'autre jambe : le corps forme une ligne droite.", en: "Step the other leg back: the body forms a straight line." } },
      { pose: "ashtanga-namaskara", breath: BreathPhase.exhale, said: { fr: "Genoux, poitrine, menton au sol", en: "Knees, chest, chin down" }, cue: { fr: "Posez les genoux, la poitrine et le menton au sol, les hanches levées.", en: "Lower the knees, the chest and the chin to the floor, the hips raised." } },
      { pose: "bhujangasana", breath: BreathPhase.inhale, said: { fr: "Glissez, soulevez la poitrine", en: "Slide forward, lift the chest" }, cue: { fr: "Glissez vers l'avant et soulevez la poitrine, les coudes près du corps.", en: "Slide forward and lift the chest, the elbows close to the body." } },
      { pose: "adho-mukha-svanasana", breath: BreathPhase.exhale, said: { fr: "Hanches hautes, talons vers le sol", en: "Hips up, heels down" }, cue: { fr: "Levez les hanches, les talons vers le sol : le corps forme un V à l'envers.", en: "Lift the hips, the heels towards the floor: the body forms an upside-down V." } },
      { pose: "ashwa-sanchalanasana", breath: BreathPhase.inhale, leadingLeg: Stance.front, said: { fr: "Jambe {leg} entre les mains", en: "{leg} foot between the hands" }, cue: { fr: "Avancez la jambe {leg}, le pied entre les mains, l'autre genou au sol.", en: "Bring the {leg} leg forward, the foot between the hands, the other knee down." } },
      { pose: "padahastasana", breath: BreathPhase.exhale, said: { fr: "L'autre jambe en avant, penchez-vous", en: "Other leg forward, fold" }, cue: { fr: "Avancez l'autre jambe et penchez-vous en avant.", en: "Bring the other leg forward and bend forward." } },
      { pose: "hasta-uttanasana", breath: BreathPhase.inhale, said: { fr: "Remontez, bras au-dessus de la tête", en: "Come up, arms overhead" }, cue: { fr: "Remontez, les bras au-dessus de la tête, et étirez-vous vers l'arrière.", en: "Come up, the arms overhead, and stretch back." } },
      { pose: "pranamasana", breath: BreathPhase.exhale, said: { fr: "Mains jointes devant la poitrine", en: "Palms together at the chest" }, cue: { fr: "Revenez debout, les mains jointes devant la poitrine.", en: "Come back to standing, the palms joined before the chest." } },
    ],
  },
]
